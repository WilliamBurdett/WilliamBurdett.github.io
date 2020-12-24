function get_checked_skills() {
    let skills = document.getElementsByName("available_skills");
    let checked_skills = [];
    for (let i = 0; i < skills.length; i++) {
        if (skills[i].checked) {
            checked_skills.push(skills[i].id);
        }
    }
    return checked_skills;
}

function build_message(message){
    return "/" + message + "/"
}

function get_ending_message(level) {
    return default_return_char + level + "/";
}

function get_skills_message(skills) {
    return "(" + skills + ")" + default_return_char + default_any_char;
}

function get_damage_message(damage_types) {
    return "% (" + damage_types + ") damage" + default_return_char + default_any_char;
}

default_return_char = "\\n";
default_any_char = "(.|" + default_return_char + ")*";
level_84_or_higher = default_any_char + "l: (84|9\\d)";

function add_player_messaging(output, skills, damage_types, level) {
    let ending_message = get_ending_message(level);
    let skills_message = get_skills_message(skills);
    let damage_message = get_damage_message(damage_types);
    output.push({
        "message_type": "skill and damage",
        "message": build_message(damage_message + skills_message + ending_message)
    });
    output.push({
        "message_type": "skills",
        "message": build_message(skills_message + ending_message)
    });
    output.push({
        "message_type": "damage",
        "message": build_message(damage_message + ending_message)
    });
}

function add_pet_messaging(output, skills, damage_types, level) {
    let insert = "bonus to all pets" + default_any_char;
    let ending_message = get_ending_message(level);
    let skills_message = get_skills_message(skills);
    let damage_message = get_damage_message(damage_types);
    output.push({
        "message_type": "skill and damage",
        "message": build_message(skills_message + insert + damage_message + ending_message)
    });
    output.push({
        "message_type": "skills",
        "message": build_message(skills_message + insert + ending_message)
    });
    output.push({
        "message_type": "damage",
        "message": build_message(insert + damage_message + ending_message)
    });
    output.push({
        "message_type": "any pets",
        "message": build_message(insert + ending_message)
    });
}

function add_retaliation_messaging(output, skills, damage_types, level){
    let insert = "retaliation" + default_any_char;
    let ending_message = get_ending_message(level);
    let skills_message = get_skills_message(skills);
    let damage_message = get_damage_message(damage_types);
    output.push({
        "message_type": "skills and damage",
        "message": build_message(insert + skills_message + + damage_message + ending_message)
    });
    output.push({
        "message_type": "damage",
        "message": build_message(insert + damage_message + ending_message)
    });
    output.push({
        "message_type": "skills",
        "message": build_message(insert + skills_message + ending_message)
    });
    output.push({
        "message_type": "any retaliation",
        "message": build_message(insert + ending_message)
    });
}

function add_both_skills_message(output, classes){
    output.push({
        "message_type": "get +skills to both classes",
        "message": "/((all skills" + default_return_char + ")|(" + classes[0] + default_any_char + classes[1] + ")|(" + classes[1] + default_any_char + classes[0] + "))" + level_84_or_higher + "/",
    });
}

function add_message(regex_div, message){
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(message.message_type));
    let text_area = document.createElement("textarea");
    text_area.textContent= message.message;
    text_area.rows = 1;
    text_area.columns = 100;
    div.appendChild(text_area);
    regex_div.appendChild(div);
}

function add_elemental_damage_type(possible_damage_types, damage_type){
    let add_elemental = false;
    let elemental_damage_types = ["Fire", "Cold", "Lightning"];
    
    elemental_damage_types.forEach(elemental_damage_type => {
        if (elemental_damage_type === damage_type){
            add_elemental = true;
        }
    })

    if (add_elemental){
        possible_damage_types.push("Elemental");
    }
}

function generate_regex() {
    let source_type = document.getElementById("source_type").value;
    let damage_type = document.getElementById("damage_type").value;
    let checked_skills = get_checked_skills();
    let classes = [
        document.getElementById("class_1").value,
        document.getElementById("class_2").value
    ]
    let regex_div = document.getElementById("regex_div");

    let level_selection = document.getElementById("level_selection").value;
    let level = "";
    if (level_selection === "84+"){
        level = level_84_or_higher;
    }

    let possible_damage_types = [];
    possible_damage_types.push("All");
    if (damage_type !== "") {
        possible_damage_types.push(damage_type);
    }

    add_elemental_damage_type(possible_damage_types, damage_type);

    if (classes[0] !== ""){
       checked_skills.push(classes[0]);
    }
    if (classes[1] !== ""){
       checked_skills.push(classes[1]);
    }
    checked_skills.push("all skills");

    let formatted_skills = checked_skills.join("|");
    let formatted_damage_types = possible_damage_types.join("|");

    let output = []

    if (source_type === "Player") {
        add_player_messaging(output, formatted_skills, formatted_damage_types, level);
    } else if (source_type === "Pets") {
        add_pet_messaging(output, formatted_skills, formatted_damage_types, level);
    } else if (source_type === "Retaliation"){
        add_retaliation_messaging(output, formatted_skills, formatted_damage_types, level);
    }

    add_both_skills_message(output, classes)

    regex_div.innerHTML = "";

    output.forEach(message => add_message(regex_div, message))
}