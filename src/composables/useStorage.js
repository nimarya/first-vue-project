import { ref, watch } from 'vue'

export function useStorage(key) {

    let storedValue = ref(localStorage.getItem(key));

    watch(storedValue, () => {
        write();
    });

    function write() {
        localStorage.setItem(key, storedValue.value);
    }

    return storedValue;
}