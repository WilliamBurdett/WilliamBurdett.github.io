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

function getChildElementsByTag(node, tag_name){
    let children = node.children;
    let elements = []
    for (let i=0;i<children.length;i++){
        let child = children[i];
        if (child.children.length> 0){
            elements = elements.concat(getChildElementsByTag(child, tag_name))
        }
    }
    if (node.tagName === tag_name){
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

function get_attributes() {
    function parse_value(value) {
        let parsed_value;
        parsed_value = value.replace("+", "");
        parsed_value = parsed_value.replace("%", "");
        parsed_value = parseFloat(parsed_value);
        return parsed_value;
    }

    function get_stats(divs, stats) {
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

    let stats = [];
    let divs = getElementsByTag("div");
    get_stats(divs, stats);


    let derived_stats = [];
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
        get(stats, "ar") + "\t";

    output_text += 70 + "\t" +
        check_less_than_three(get(stats, "blockChance")) + "\t" +
        check_less_than_three(get(stats, "blockRecovery")) + "\t" +
        check_less_than_three(get(stats, "dodgeChance")) + "\t" +
        check_less_than_three(get(stats, "deflectChance")) + "\t";

    output_text += get(stats, "oa") + "\t" + get(stats, "da") + "\t" + get(stats, "critDamage")

    alert(output_text);
}

setTimeout(() => get_attributes(), 1000);
