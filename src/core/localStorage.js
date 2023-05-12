const _data_key = 'todo-storage'

const toArray = (data_object) => {
    const _data_array = []

    for (const [key, value] of Object.entries(data_object))
        _data_array.push(`${key}:${value}`);

    return _data_array;
}

const toObject = (data_string) => {
    const _data_object = {}
    const data_array = data_string.split('\t');

    for (let index = 0; index < data_array.length; index++) {
        const [key, value] = data_array[index].split(":");

        if (["true", "false"].includes(value))
            _data_object[key] = value === "true" ? true : false;
        else
            _data_object[key] = value;
    }

    return _data_object;
}

export const setData = (data_object) => {
    const old_data = localStorage.getItem(_data_key);

    if (!old_data) {
        localStorage.setItem(_data_key, toArray(data_object).join('\t'))
    } else {
        let new_data = old_data + '\n' + toArray(data_object).join('\t')
        localStorage.setItem(_data_key, new_data)
    }
}

export const getData = () => {
    const old_data = localStorage.getItem(_data_key);

    if (!old_data) {
        return [];
    } else {
        let old_data_array = old_data.split('\n')

        for (let index = 0; index < old_data_array.length; index++) {
            old_data_array[index] = toObject(old_data_array[index]);
        }

        return old_data_array
    }
}

export const removeData = (id) => {
    let _data = getData()
    const index = _data.findIndex(data => +data.id === id);

    const old_data = localStorage.getItem(_data_key).split('\n');
    old_data.splice(index, 1)

    localStorage.setItem(_data_key, old_data.join('\n'))
}

export const updateData = (id, new_data) => {
    const _data = getData()
    const index = _data.findIndex(data => +data.id === id);

    const old_data = localStorage.getItem(_data_key).split('\n');
    old_data[index] = toArray(new_data).join('\t')
    localStorage.setItem(_data_key, old_data.join('\n'))
}
