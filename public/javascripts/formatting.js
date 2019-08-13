/*************************/
/* Simple date formatter */
/*************************/
function formatDate(dateArray) {
    return dateArray[1] + "/" + dateArray[2] + "/" + dateArray[0];
}

/**************************/
/* Simple money formatter */
/**************************/
function formatMoney(number) {
    return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}