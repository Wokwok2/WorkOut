function popup(date) {
    window.open("/workout/input?date="+date.year+'-'+date.month+'-'+date.day, "pop", "width=570, height=420, scrollbars=yes");
    // window.open("/workout/input?day="+date.day+'&year='+date.year+'&month='+date.month, "pop", "width=570, height=420, scrollbars=yes");
}