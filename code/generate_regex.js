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

function build_message(message) {
    return "/" + message + "/";
}

function get_skills_message(skills, bonus_to_skills_type) {
    if (skills === "") {
        return "";
    }
    let output = " to (" + skills + ")" + default_return_char + default_any_char;
    if (bonus_to_skills_type === "only_modifiers") {
        output = "[A-Za-z]" + output;
    } else if (bonus_to_skills_type === "only_raw_values"){
        output = "\\d"  + output;
    }
    return output;
}

function get_damage_message(damage_types, damage_include_type) {
    let message = "(" + damage_types + ") damage" + default_return_char + default_any_char;
    if (damage_include_type === "only_percent_values") {
        message = "% " + message;
    } else if (damage_include_type === "only_raw_values") {
        message = "\\d " + message;
    }
    return message;
}

default_return_char = "\\n";
default_any_char = "(.|" + default_return_char + ")*";
level_84_or_higher = default_any_char + "l: (84|9\\d)";

function add_player_messaging(output, level_message, skills_message, damage_message) {
    output.push({
        "message_type": "skill and damage",
        "message": build_message(damage_message + skills_message + level_message)
    });
    output.push({
        "message_type": "skills",
        "message": build_message(skills_message + level_message)
    });
    output.push({
        "message_type": "damage",
        "message": build_message(damage_message + level_message)
    });
}

function add_pet_messaging(output, level_message, skills_message, damage_message) {
    let insert = "bonus to all pets" + default_any_char;
    output.push({
        "message_type": "skill and damage",
        "message": build_message(skills_message + insert + damage_message + level_message)
    });
    output.push({
        "message_type": "skills",
        "message": build_message(skills_message + insert + level_message)
    });
    output.push({
        "message_type": "damage",
        "message": build_message(insert + damage_message + level_message)
    });
    output.push({
        "message_type": "any pets",
        "message": build_message(insert + level_message)
    });
}

function add_retaliation_messaging(output, level_message, skills_message, damage_message) {
    let insert = "retaliation" + default_any_char;
    output.push({
        "message_type": "skills and damage",
        "message": build_message(insert + skills_message + damage_message + level_message)
    });
    output.push({
        "message_type": "damage",
        "message": build_message(insert + damage_message + level_message)
    });
    output.push({
        "message_type": "skills",
        "message": build_message(insert + skills_message + level_message)
    });
    output.push({
        "message_type": "any retaliation",
        "message": build_message(insert + level_message)
    });
}

function add_both_skills_message(output, classes, level_message) {
    let all_skills_message = "(all skills" + default_return_char + ")"
    if (classes[0] === "" || classes[1] === "") {
        return;
    }
    let class_1_first = "(" + classes[0] + default_any_char + classes[1] + ")"
    let class_2_first = "(" + classes[1] + default_any_char + classes[0] + ")"
    let messages = [
        all_skills_message,
        class_1_first,
        class_2_first
    ];
    output.push({
        "message_type": "get +skills to both classes",
        "message": build_message("(" + messages.join("|") + ")" + level_message)
    });
}

function create_div_for_message() {
    let div = document.createElement("div");
    div.classList.add("inline");
    return div;
}

function add_message(regex_div, message) {
    let div = document.createElement("div");
    div.classList.add("section");
    let name_div = create_div_for_message();
    name_div.classList.add("regex_messages");
    name_div.appendChild(document.createTextNode(message.message_type));
    div.appendChild(name_div);

    let text_div = create_div_for_message();
    let text_area = document.createElement("textarea");
    text_area.textContent = message.message;
    text_div.appendChild(text_area);
    div.appendChild(text_div);

    let copy_div = create_div_for_message();
    let copy_button = document.createElement("input");
    copy_button.type = "button";
    copy_button.addEventListener("click", function () {
        text_area.select();
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
    });
    copy_button.value = "Copy Text";
    copy_div.appendChild(copy_button);
    div.appendChild(copy_div);

    let link_div = create_div_for_message();
    let link = document.createElement("a");
    link.href = "https://www.grimtools.com/db/search?query=" + message.message + "&in_description=1&exact_match=0";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    let link_text = document.createTextNode("Link to grim tools");
    link.appendChild(link_text);
    link_div.appendChild(link);
    div.appendChild(link_div);
    regex_div.appendChild(div);
}

function add_elemental_damage_type(possible_damage_types, damage_type) {
    let add_elemental = false;
    let elemental_damage_types = ["Fire", "Cold", "Lightning"];

    for (let i = 0; i < elemental_damage_types.length; i++) {
        if (elemental_damage_types[i] === damage_type) {
            add_elemental = true;
        }
    }

    if (add_elemental) {
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

    let level_selection = document.getElementById("level_selection").value;
    let level_message = "";
    if (level_selection === "84+") {
        level_message = level_84_or_higher;
    }

    let damage_include_type = document.getElementById("damage_include_type").value;
    let bonus_to_skills_type = document.getElementById("bonus_to_skills_type").value;

    let possible_damage_types = [];
    possible_damage_types.push("to All");
    if (damage_type !== "") {
        possible_damage_types.push(damage_type);
    }

    add_elemental_damage_type(possible_damage_types, damage_type);

    if (classes[0] !== "") {
        checked_skills.push("all skills in " + classes[0]);
    }
    if (classes[1] !== "") {
        checked_skills.push("all skills in " + classes[1]);
    }
    checked_skills.push("all skills");

    let formatted_skills = checked_skills.join("|");
    let formatted_damage_types = possible_damage_types.join("|");

    let output = []

    let skills_message = get_skills_message(formatted_skills, bonus_to_skills_type);
    let damage_message = get_damage_message(formatted_damage_types, damage_include_type);

    if (source_type === "Player") {
        add_player_messaging(output, level_message, skills_message, damage_message);
    } else if (source_type === "Pets") {
        add_pet_messaging(output, level_message, skills_message, damage_message);
    } else if (source_type === "Retaliation") {
        add_retaliation_messaging(output, level_message, skills_message, damage_message);
    }

    add_both_skills_message(output, classes, level_message)

    let regex_div = document.getElementById("regex_output");
    regex_div.innerHTML = "";
    output.forEach(message => add_message(regex_div, message))
}
