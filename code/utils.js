function add_to_select(select, value) {
    let option = document.createElement("option");
    option.text = value;
    option.value = value;
    select.add(option);
}