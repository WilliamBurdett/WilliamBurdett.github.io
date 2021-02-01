function add_to_select(select, value) {
    let option = document.createElement("option");
    option.text = value;
    option.value = value;
    select.add(option);
}

function setup_auto_regex_generation(){
    let auto_generate_regex = document.getElementById("auto_generate_regex");
    let obj_ids = [
        {"id": "class_1", "type": "change"},
        {"id": "class_2", "type": "change"},
        {"id": "level_selection", "type": "change"},
        {"id": "damage_include_type", "type": "change"},
        {"id": "source_type", "type": "change"},
        {"id": "uncheck_skills", "type": "click"},
        {"id": "bonus_to_skills_type", "type": "change"},
        {"id": "include_all_damage", "type": "change"},
        {"id": "include_elemental_damage", "type": "change"},
        {"id": "damage_type_operator", "type": "change"},
    ];
    obj_ids.forEach(config => {
        if (auto_generate_regex.checked   === true){
            let obj = document.getElementById(config.id);
            obj.addEventListener(config.type, function (){
               generate_regex();
            });
        }
    });
}

function setup_class_select(class_select_id){
    let class_select = document.getElementById(class_select_id);
    all_skills.forEach(obj => add_to_select(class_select, obj.class_name));
}

function add_damage_type_to_div(names_div, checkboxes_div, name){
    let name_div = document.createElement("div");
    // name_div.classList.add("regex_messages");
    name_div.classList.add("damage_sources");
    let name_text = document.createTextNode(name);
    name_text.addEventListener("click", function (){
        generate_regex();
    });
    name_div.appendChild(name_text);
    names_div.appendChild(name_div)

    let checkbox_div = document.createElement("div");
    checkbox_div.classList.add("damage_sources");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = name;
    checkbox.addEventListener("change", function (){
        generate_regex();
    });
    checkbox_div.appendChild(checkbox)
    checkboxes_div.appendChild(checkbox_div);
}

function add_damage_type(damage_type){
    if (damage_type.type === "direct"){
        let names_div = document.getElementById("direct_damage_source_names");
        let checkboxes_div = document.getElementById("direct_damage_source_checkboxes");
        add_damage_type_to_div(names_div, checkboxes_div, damage_type.name);
    } else {
        let names_div = document.getElementById("dot_damage_source_names");
        let checkboxes_div = document.getElementById("dot_damage_source_checkboxes");
        add_damage_type_to_div(names_div, checkboxes_div, damage_type.name);
    }
}

function fill_values() {
    all_damage_types.forEach(damage_type => add_damage_type(damage_type));

    setup_class_select("class_1");
    setup_class_select("class_2");

    setup_auto_regex_generation();
}

function uncheck_skills(){
    let skills = document.getElementsByName("available_skills");
    for (let i = 0; i < skills.length; i++) {
        skills[i].checked = false;
    }
}

function add_skill_to_available_list(skill_row, skill) {
    let checkbox_column = document.createElement("td");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.id = skill.name;
    checkbox.name = "available_skills";
    checkbox.checked = skill.default;
    checkbox.addEventListener("change", function (){
        generate_regex();
    });

    checkbox_column.appendChild(checkbox);
    skill_row.appendChild(checkbox_column);

    let name_column = document.createElement("td");
    let img = document.createElement("img");
    img.alt = skill.name;
    img.src = "images/" + skill.name.replace(/ /g, "_") + ".png";
    img.addEventListener("click", function (){
        checkbox.checked = checkbox.checked !== true;
        generate_regex();
    });
    name_column.appendChild(img);

    name_column.appendChild(document.createElement("br"));

    let name = document.createTextNode(skill.name);
    name_column.appendChild(name);

    name_column.style.borderRight = "1px";
    name_column.style.borderTop = "1px";
    name_column.style.borderBottom = "1px";
    skill_row.appendChild(name_column);
}

function add_empty_column(skill_row) {
    let empty_column = document.createElement("td");
    empty_column.innerHTML = "&nbsp;";
    skill_row.appendChild(empty_column);
}

function create_div_for_skill(skill_table, skill, max_dependencies) {
    let skill_row = document.createElement("tr");
    let current_count = 1;
    add_skill_to_available_list(skill_row, skill);
    current_count += skill.skills.length;
    skill.skills.forEach(dependent_skill => add_skill_to_available_list(skill_row, dependent_skill));
    for (let i = current_count; i <= max_dependencies; i++) {
        add_empty_column(skill_row)
    }
    skill_table.appendChild(skill_row);
}

function add_name_row(table, max_dependencies, type_name) {
    let name_row = document.createElement("tr");
    name_row.style.backgroundColor = "blue";
    add_empty_column(name_row);
    let name_cell = document.createElement("td");
    let name_text = document.createElement("h4");
    name_text.appendChild(document.createTextNode(type_name));
    name_cell.appendChild(name_text)
    name_row.appendChild(name_cell);
    for (let j = 2; j < max_dependencies*2; j++) {
        add_empty_column(name_row);
    }
    table.appendChild(name_row);
}

function fill_skills(index){
    let class_name = document.getElementById("class_" + index).value;
    let skills_class_div = document.getElementById("skills_class_" + index);
    skills_class_div.innerHTML = "";
    if (class_name !== "") {
        let table = document.createElement("table");
        table.style.fontSize = "12px";
        skills_class_div.appendChild(table);
        let class_skills = get_skills_for_class(class_name);
        let max_dependencies = 1;
        class_skills.forEach(skill => function(){
            if (skill.skills.length > max_dependencies) {
                max_dependencies = skill.skills.length;
            }
        })
        for (let i=0;i<all_types.length;i++){
            let type_skills = get_skills_by_type(class_skills, all_types[i].raw_type);
            if (type_skills.length > 0){
                add_name_row(table, max_dependencies, all_types[i].name);
                type_skills.forEach(skill => create_div_for_skill(table, skill, max_dependencies));
            }
        }
    }
}
