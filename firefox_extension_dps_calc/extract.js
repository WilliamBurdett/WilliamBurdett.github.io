let stats = [];
let derived_stats = [];
let skills = [];

function upsert(array, name, value) {
    if (value === "") {
        return;
    }
    let found = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === name) {
            if (array[i].value < value) {
                array[i].value = value;
            }
            found = true;
        }
    }
    if (!found) {
        array.push({"name": name, "value": value});
    }
}

function get(array, name) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === name) {
            return array[i].value;
        }
    }
}

function check_less_than_three(value) {
    if (value < 3) {
        return "";
    } else {
        return value;
    }
}

function getChildElementsByTag(node, tag_name) {
    let children = node.children;
    let elements = []
    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        if (child.children.length > 0) {
            elements = elements.concat(getChildElementsByTag(child, tag_name))
        }
    }
    if (node.tagName === tag_name) {
        elements.push(node);
    }
    return elements
}


function getElementsByTag(tag_name) {
    tag_name = tag_name.toUpperCase();
    let elements = [];

    let node = document.getElementsByTagName("body")[0];

    elements = elements.concat(getChildElementsByTag(node, tag_name));

    return elements;
}

function parse_value(value) {
    let parsed_value;
    parsed_value = value.replace("+", "");
    parsed_value = parsed_value.replace("%", "");
    parsed_value = parseFloat(parsed_value);
    return parsed_value;
}

function get_stats(divs) {
    for (let i = 0; i < divs.length; i++) {
        let div = divs[i];
        let stat = div.getAttribute("stat");
        if (stat !== null) {
            let obj = {"name": stat};
            if (div.classList.contains("text")) {
                // Resistance
                obj.value = div.innerHTML;
            } else {
                // Default attribute
                let children = div.children;
                for (let j = 0; j < children.length; j++) {
                    let child = children[j];
                    if (child.classList.contains("value")) {
                        obj.value = child.innerHTML;
                    }
                }
            }
            if (obj.value) {
                upsert(stats, obj.name, parse_value(obj.value));
            }
        }
    }
}

function get_armour_abs(divs) {
    let armor_abs = 70;
    for (let i = 0; i < divs.length; i++) {
        let div = divs[i];
        if (div.classList.contains("stat-armor-column")) {
            let span = div.firstChild;
            let value = parse_value(span.innerHTML);
            if (!isNaN(value) && span.innerHTML.includes("%")) {
                if (value > armor_abs && value <= 100) {
                    armor_abs = value;
                }
            }
        }
    }
    return armor_abs;
}

function get_attributes() {
    let divs = getElementsByTag("div");

    get_stats(divs);

    upsert(derived_stats, "armor_abs", get_armour_abs(divs))

    let max_res = 0;
    let min_res = 100;
    let max_damage_modifier = 0;
    let res_names = [
        "resFire",
        "resLightning",
        "resCold",
        "resPoison",
        "resPierce",
        "resBleeding",
        "resLife",
        "resAether",
        "resStun",
        "resChaos"
    ];
    stats.forEach(stat => {
        if (res_names.includes(stat.name)) {
            if (stat.value > max_res) {
                max_res = stat.value;
            }
            if (stat.value < min_res) {
                min_res = stat.value;
            }
        }
        if (stat.name.startsWith("damage") && stat.name.endsWith("Modifier")) {
            if (stat.value > max_damage_modifier) {
                max_damage_modifier = stat.value;
            }
        }
    })
    upsert(derived_stats, "max_res", max_res);
    upsert(derived_stats, "min_res", min_res);
    upsert(derived_stats, "max_damage_modifier", max_damage_modifier);

    let output_text = get(derived_stats, "max_damage_modifier") + "\t" +
        get(stats, "health") + "\t" +
        get(stats, "healthRegen") + "\t" +
        get(stats, "ar") + "\t" +
        get(derived_stats, "armor_abs") + "\t" +
        check_less_than_three(get(stats, "blockChance")) + "\t" +
        check_less_than_three(get(stats, "blockRecovery")) + "\t" +
        check_less_than_three(get(stats, "blockAmount")) + "\t" +
        check_less_than_three(get(stats, "dodgeChance")) + "\t" +
        check_less_than_three(get(stats, "deflectChance")) + "\t" +
        get(stats, "oa") + "\t" +
        get(stats, "da") + "\t" +
        get(stats, "critDamage") + "\t" +
        get(stats, "resPhysical") + "\t" +
        get(stats, "weaponDamage") + "\t" +
        get(stats, "aps") + "\t" +
        get(stats, "attackSpeed") + "\t" +
        get(stats, "castSpeed") + "\t" +
        get(stats, "cooldownReduction");

    alert(output_text);
}

function trigger_event(event_type, process_div){
    let divs = getElementsByTag("div");
    for (let i = 0; i < divs.length; i++) {
        let div = divs[i];
        let processed = process_div(div, event_type);
        if (processed === true){
            return true;
        }
    }
}

function trigger_mouse_event(div, event_type){
    const mouseEvent = new Event(event_type, {
      view: window,
      bubbles: true,
      cancelable: true
    });
    console.log(div.classList);
    div.dispatchEvent(mouseEvent);
}

function look_for_armor(div, event_type){
    if (div.classList.contains("char-info-row") && div.getAttribute("stat") === "ar"){
        trigger_mouse_event(div, event_type);
        return true;
    }
    return false;
}

function open_skills(div, event_type){
    // Opens skills tab
    Tj(1);
    return true;
}

function do_all() {
    trigger_event("mouseover", look_for_armor);
    get_attributes();
    trigger_event("mouseout", look_for_armor);
    trigger_event("click", open_skills);
}

do_all();