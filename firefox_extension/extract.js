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

function get(array, name){
    console.log(name);
    for(let i=0;i<array.length;i++) {
        if (array[i].name === name){
            return array[i].value;
        }
    }
}

function get_attributes() {
    function parse_value(value){
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
                    obj.value = div.innerText;
                } else {
                    // Default attribute
                    let children = div.children;
                    for (let j = 0; j < children.length; j++) {
                        let child = children[j];
                        if (child.classList.contains("value")) {
                            obj.value = child.innerText;
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
    let divs = document.getElementsByTagName("div");
    let first_div;
    for (let i = 0; i < divs.length; i++) {
        let div = divs[i];
        let tab = div.getAttribute("tab");
        if (tab !== null) {
            if (!first_div){
                first_div = div;
            }
            div.click();
            get_stats(divs, stats);
        }
    }
    first_div.click();
    let output = []
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
    let needed_stats = [
        "health",
        "oa",
        "da",
        "healthRegen",
        "ar",
        "critDamage"
    ];
    stats.forEach(stat => {
        console.log(stat.name + ": " + stat.value);
        if (res_names.includes(stat.name)) {
            if (stat.value > max_res) {
                max_res = stat.value;
            }
            if (stat.value < min_res) {
                min_res = stat.value;
            }
        }
        if (needed_stats.includes(stat.name)) {
            upsert(output, stat.name, stat.value);
        }
        if (stat.name.startsWith("damage") && stat.name.endsWith("Modifier")) {
            if (stat.value > max_damage_modifier) {
                max_damage_modifier = stat.value;
            }
        }
    })
    upsert(output, "max_res", max_res);
    upsert(output, "min_res", min_res);
    upsert(output, "max_damage_modifier", max_damage_modifier);

    let output_text = get(output, "max_damage_modifier") + "\t" +
        get(output, "health") + "\t" +
        get(output, "healthRegen") + "\t" +
        get(output, "ar");

    // console.log(to_string(stats));
    // alert(to_string(output));
    alert(output_text);
    alert(get(output, "oa") + "\t" + get(output, "da") + "\t" + get(output, "critDamage"));
}
setTimeout(() => get_attributes(), 1000);
