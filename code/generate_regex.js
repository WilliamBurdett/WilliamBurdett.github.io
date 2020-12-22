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

return_char = "\\n";
any_char = "(.|" + return_char + ")*";
level = any_char + "l: (84|9\\d)";

function add_player_messaging(output, skills, damage_types) {
    output.push({
        "message_type": "skill and damage",
        "message": "/(" + damage_types + ") damage" + return_char + "" + any_char + "(" + skills + ")" + return_char + "" + level + "/"
    });
    output.push({
        "message_type": "damage",
        "message": "/(" + damage_types + ") damage" + return_char + level + "/",
    });
}

function add_pet_messaging(output, skills, damage_types) {
    let insert = "bonus to all pets";
    output.push({
        "message_type": "skill and damage",
        "message": "/(" + skills + ")" + return_char + any_char + insert + any_char + "(" + damage_types + ") damage" + return_char + level + "/"
    });
    output.push({
        "message_type": "skills",
        "message": "/(" + skills + ")" + return_char + any_char + insert + level + "/"
    });
    output.push({
        "message_type": "damage",
        "message": "/" + insert + any_char + "(" + damage_types + ") damage" + return_char + level + "/"
    });
    output.push({
        "message_type": "any pets",
        "message": "/" + insert + level + "/"
    });
}

function add_retaliation_messaging(output, skills, damage_types){
    let insert = "retaliation";
    output.push({
        "message_type": "skills and damage",
        "message": "/" + insert + any_char + "(" + skills + ")" + level + "/"
    });
    output.push({
        "message_type": "damage",
        "message": "/" + insert + any_char + "(" + damage_types + ")" + level + "/"
    });
    output.push({
        "message_type": "skills",
        "message": "/" + insert + any_char + "(" + skills + ")" + level + "/"
    });
    output.push({
        "message_type": "any retaliation",
        "message": "/" + insert + level + "/"
    });
}

function add_both_skills_message(output, classes){
    output.push({
        "message_type": "get +skills to both classes",
        "message": "/((all skills" + return_char + ")|(" + classes[0] + any_char + classes[1] + ")|(" + classes[1] + any_char + classes[0] + "))" + level + "/",
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

    let possible_damage_types = [];
    possible_damage_types.push("All");
    possible_damage_types.push(damage_type);

    add_elemental_damage_type(possible_damage_types, damage_type)

    checked_skills.push(classes[0]);
    checked_skills.push(classes[1]);

    let formatted_skills = checked_skills.join("|");
    let formatted_damage_types = possible_damage_types.join("|");

    let output = []

    if (source_type === "Player") {
        add_player_messaging(output, formatted_skills, formatted_damage_types);
    } else if (source_type === "Pets") {
        add_pet_messaging(output, formatted_skills, formatted_damage_types);
    } else if (source_type === "Retaliation"){
        add_retaliation_messaging(output, formatted_skills, formatted_damage_types);
    }

    add_both_skills_message(output, classes)

    regex_div.innerHTML = "";

    output.forEach(message => add_message(regex_div, message))
}