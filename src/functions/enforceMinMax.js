export function enforceMinMax(el) {
    if (el.value !== "") {
        let num = Number(el.value);
        el.value = Math.max(el.min, Math.min(el.max, isNaN(num) ? el.min : num));
    }
}