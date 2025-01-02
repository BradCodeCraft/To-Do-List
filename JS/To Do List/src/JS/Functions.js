export const Functions = {
  convertMonth: function(month) {
    switch (Number(month)) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Aug";
      case 9:
        return "Sep";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      case 12:
        return "Dec";
      default:
        break;
    }
  },
  convertDay: function(day) {
    switch (Number(day)) {
      case 1:
        return "1st";
      case 2:
        return "2nd";
      case 3:
        return "3rd";
      case 21:
        return "21st";
      case 22:
        return "22nd";
      case 23:
        return "23rd";
      case 31:
        return "31st";
      default:
        return `${day}th`;
    }
  },
  forceUpdate: function() {
    const activePageContentList = document.querySelector(".content>.active>main>.content-list");
    activePageContentList.innerHTML = activePageContentList.innerHTML;
  }
}
