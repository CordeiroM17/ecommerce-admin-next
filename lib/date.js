export function prettyDate(dateStr) {
    (new Date(dateStr)).toLocaleDateString('en-Gb')
}