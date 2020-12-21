function add_to_select(select, value) {
    let option = document.createElement("option");
    option.text = value;
    option.value = value;
    select.add(option);
}

function fill_values() {
    let source_damage_type = document.getElementById("damage_type");
    all_damage_types.forEach(damage_type => add_to_select(source_damage_type, damage_type.name));

    let class_1 = document.getElementById("class_1");
    let class_2 = document.getElementById("class_2");
    all_skills.forEach(obj => add_to_select(class_1, obj.class_name));
    all_skills.forEach(obj => add_to_select(class_2, obj.class_name));
}

function add_skill_to_available_list(skill_row, skill) {
    let name_column = document.createElement("td");
    let img = document.createElement("img");
    img.alt = skill.name;
    img.src = "images/" + skill.name.replace(/ /g, "_") + ".png";
    name_column.appendChild(img);

    name_column.appendChild(document.createElement("br"));

    let name = document.createTextNode(skill.name);
    name_column.appendChild(name);
    skill_row.appendChild(name_column);

    let checkbox_column = document.createElement("td");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.id = skill.name;
    checkbox.name = "available_skills";
    checkbox.checked = skill.default;
    checkbox_column.appendChild(checkbox)
    skill_row.appendChild(checkbox_column)
}

function add_empty_column(skill_row) {
    for (let i = 0; i < 2; i + {}) {
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


function fill_skills() {
    for (let i = 1; i <= 2; i++) {
        let class_name = document.getElementById("class_" + i).value;
        let skills_class_div = document.getElementById("skills_class_" + i);
        skills_class_div.innerHTML = "";
        if (class_name !== "") {
            let table = document.createElement("table");
            table.style.fontSize = "9";
            skills_class_div.appendChild(table);
            let skills = get_skills_for_class(class_name);
            let max_dependencies = 1;
            skills.forEach(skill => {
                if (skill.skills.length > max_dependencies) {
                    max_dependencies = skill.skills.length;
                }
            })
            skills.forEach(skill => create_div_for_skill(table, skill, max_dependencies));
        }
    }
}
