class UniversalData{
    attack_speed = 0;
    cast_speed = 0;
    cooldown = 0;
    flat_damages = [];
    skills = [];
}

let universal_data = new UniversalData();

class Skill {
    damages = [];
    skill_type;
    trigger_option_proc;
    trigger_option_percent;
    cooldown_option_length;
}

class FlatDamage {
    damage_type;
    min_damage;
    max_damage;
}


function add_listener_to_inputs(){
    let attack_speed_input = document.getElementById("global_attack_speed");
    attack_speed_input.addEventListener("change", function(){
        universal_data.attack_speed = attack_speed_input.value;
    });

    let cast_speed_input = document.getElementById("global_cast_speed");
    cast_speed_input.addEventListener("change", function(){
        universal_data.cast_speed = cast_speed_input.value;
    });

    let cooldown_input = document.getElementById("global_cooldown");
    cooldown_input.addEventListener("change", function(){
        universal_data.cooldown = cooldown_input.value;
    });

    let add_flat_damage = document.getElementById("add_flat_damage");
    add_flat_damage.addEventListener("click", function () {
        let flat_damage = new FlatDamage();
        universal_data.flat_damages.push(flat_damage);
        add_flat_damage_div(document.getElementById("flat_damages"), flat_damage);
    });

    let add_skills = document.getElementById("add_skills");
    add_skills.addEventListener("click", function () {
        add_skill();
    });
}


function add_flat_damage_div(damages_list_div, flat_damage) {
    let new_flat_damage = document.createElement("div");
    damages_list_div.appendChild(new_flat_damage);

    let damage_type_div = document.createElement("div");
    let type_select = document.createElement("select");
    type_select.addEventListener("change", function () {
        flat_damage.damage_type = type_select.value;
    });
    all_damage_types.forEach(damage_type => function () {
        add_to_select(type_select, damage_type.name);
    });
    damage_type_div.appendChild(type_select)
    new_flat_damage.appendChild(damage_type_div);

    let damage_range_div = document.createElement("div");
    let min_damage = document.createElement("input");
    min_damage.classList.add("number_input");
    min_damage.addEventListener("change", function () {
        flat_damage.min_damage = min_damage.value;
    });
    let max_damage = document.createElement("input");
    max_damage.classList.add("number_input");
    max_damage.addEventListener("change", function () {
        flat_damage.max_damage = max_damage.value;
    });

    damage_range_div.appendChild(min_damage);
    damage_range_div.appendChild(document.createTextNode("-"));
    damage_range_div.appendChild(max_damage);
    new_flat_damage.appendChild(damage_range_div);
}

function populate_type_option_div(type_option_div, skill_type, skill) {
    if (skill_type === "Trigger") {
        let proc_div = document.createElement("div");
        proc_div.classList.add("attribute");
        proc_div.appendChild(document.createTextNode("WPS or Proc"));
        let proc_select = document.createElement("select");
        add_to_select(proc_select, "WPS");
        add_to_select(proc_select, "Proc")
        proc_select.addEventListener("change", function () {
            skill.trigger_option_proc = proc_select.value;
        });
        proc_div.appendChild(proc_select);
        type_option_div.appendChild(proc_div);

        let percent_div = document.createElement("div");
        percent_div.classList.add("attribute");
        percent_div.appendChild(document.createTextNode("% Chance"));
        let percent_input = document.createElement("input");
        percent_input.classList.add("number_input");
        percent_input.type = "number";
        percent_input.addEventListener("change", function () {
            skill.trigger_option_percent = percent_input.value;
        });
        percent_div.appendChild(percent_input);
        type_option_div.appendChild(percent_div);
    } else if (skill_type === "Cooldown") {
        type_option_div.appendChild(document.createTextNode("Cooldown"));
        let cooldown_input = document.createElement("input");
        cooldown_input.type = "number";
        cooldown_input.classList.add("number_input");
        cooldown_input.addEventListener("change", function () {
            skill.cooldown_option_length = cooldown_input.value;
        });
        type_option_div.appendChild(cooldown_input);
    } else {
        while (type_option_div.hasChildNodes()) {
            type_option_div.removeChild(type_option_div.children[0]);
        }
    }
}

function add_skill() {
    let skill = new Skill();
    universal_data.skills.push(skill);
    let skills_div = document.getElementById("skills");
    let new_skill_div = document.createElement("div");
    new_skill_div.classList.add("section");
    skills_div.appendChild(new_skill_div);
    let damages_div = document.createElement("div");
    new_skill_div.appendChild(damages_div);
    damages_div.appendChild(document.createTextNode("Flat Damages"));
    let add_damage_button = document.createElement("input");
    add_damage_button.type = "button";
    add_damage_button.value = "Add damage type";
    damages_div.appendChild(add_damage_button);

    let type_option_div = document.createElement("div");

    let type_select = document.createElement("select");
    add_to_select(type_select, "Spell");
    add_to_select(type_select, "Attack");
    add_to_select(type_select, "Cooldown");
    add_to_select(type_select, "Trigger");
    type_select.addEventListener("change", function () {
        skill.skill_type = type_select.value;
        populate_type_option_div(type_option_div, type_select.value);
    });

    new_skill_div.appendChild(type_select);
    new_skill_div.appendChild(type_option_div);

    let damages_list_div = document.createElement("div");
    damages_div.appendChild(damages_list_div);
    add_damage_button.type = "button";
    add_damage_button.value = "Add Flat Damage";
    add_damage_button.addEventListener("click", function () {
        let flat_damage = new FlatDamage();
        skill.damages.push(flat_damage);
        add_flat_damage_div(damages_list_div, flat_damage);
    });

    new_skill_div.appendChild(damages_div)
    // Flat damages
    // min, max, damage type
    // weapon damage
    // Type (cooldown, spell, attack, trigger)
    // if trigger (wps or proc), trigger percent
}

function calc_dps() {
    let dps_div = document.getElementById("dps_output");
}

function add_flat_global_damage() {
    let flat_damages_div = document.getElementById("flat_damages");

    add_flat_damage_div(flat_damages_div, )
}