function add_to_select(select, value) {
    let option = document.createElement("option");
    option.text = value;
    option.value = value;
    select.add(option);
}

function setup_auto_regex_generation(){
    let ids = ["class_1", "class_2", "damage_type", "level_selection", "damage_include_type"];
    ids.forEach(id => {
       let obj = document.getElementById(id);
       obj.addEventListener("change", function (){
           generate_regex();
       });
       console.log(obj.value);
    });
}

function setup_class_select(class_select_id){
    let class_select = document.getElementById(class_select_id);
    all_skills.forEach(obj => add_to_select(class_select, obj.class_name));
}

function fill_values() {
    let source_damage_type = document.getElementById("damage_type");
    all_damage_types.forEach(damage_type => add_to_select(source_damage_type, damage_type.name));

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
    for (let i = 0; i < 2; i ++) {
        let empty_column = document.createElement("td");
        empty_column.innerHTML = "&nbsp;";
        skill_row.appendChild(empty_column);
    }
}

function create_div_for_skill(skill_table, skill, max_dependencies) {
    let skill_row = document.createElement("tr");
    let curent_count = 1;
    add_skill_to_available_list(skill_row, skill);
    curent_count += skill.skills.length;
    skill.skills.forEach(dependent_skill => add_skill_to_available_list(skill_row, dependent_skill));
    for (let i = curent_count; i <= max_dependencies; i++) {
        add_empty_column(skill_row)
    }
    skill_table.appendChild(skill_row);
}

function fill_skills(index){
    let class_name = document.getElementById("class_" + index).value;
    let skills_class_div = document.getElementById("skills_class_" + index);
    skills_class_div.innerHTML = "";
    if (class_name !== "") {
        let table = document.createElement("table");
        table.style.fontSize = "12px";
        skills_class_div.appendChild(table);
        let skills = get_skills_for_class(class_name);
        let max_dependencies = 1;
        skills.forEach(skill => function(){
            if (skill.skills.length > max_dependencies) {
                max_dependencies = skill.skills.length;
            }
        })
        skills.forEach(skill => create_div_for_skill(table, skill, max_dependencies));
    }
}
