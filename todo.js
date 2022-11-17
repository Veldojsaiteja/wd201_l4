const todoList = () => {
  all_sai = [];
  const add = (todoItem) => {
    all_sai.push(todoItem);
  };
  const markAsComplete = (index) => {
    all_sai[index].completed = true;
  };

  var yesterday_sai = new Date();
  yesterday_sai.setDate(yesterday_sai.getDate() - 1).toLocaleString("en-CA");

  var today_sai = new Date().toLocaleString("en-CA");

  var tom_sai = new Date();
  tom_sai.setDate(tom_sai.getDate() + 1).toLocaleString("en-CA");
  const overdue = () => {
    var od = [];
    var i = 0;
    while(i < all_sai.length){
      if (all_sai[i].dueDate == yesterday_sai) {
         od.push(all_sai[i]);
        }
      i++;
    }
    return od;
  };

  const dueToday = () => {
    var dt = [];
    for (var i = 0; i < all_sai.length; i++) {
      if (all_sai[i].dueDate == today_sai) {
        dt.push(all_sai[i]);
      }
    }
    return dt;
  };

  const dueLater = () => {
    var dl = [];
    for (var i = 0; i < all_sai.length; i++) {
      if (all_sai[i].dueDate == tom_sai) {
        dl.push(all_sai[i]);
      }
    }
    return dl;
  };

  const toDisplayableList = (list) => {
    var OUTPUT_STRING = "", i = 0;
    for (i = 0; i < list.length - 1; i++) {
      if (list[i].dueDate != today_sai) {
        OUTPUT_STRING =
          OUTPUT_STRING + "[ ] " + list[i].title + " " + list[i].dueDate + "\n";
      } else {
        if (list[i].completed != true) {
          OUTPUT_STRING = OUTPUT_STRING + "[ ] " + list[i].title + " " + "\n";
        } else {
          OUTPUT_STRING = OUTPUT_STRING + "[x] " + list[i].title + " " + "\n";
        }
      }
    }

    if (list[i].dueDate != today_sai) {
      OUTPUT_STRING =
        OUTPUT_STRING + "[ ] " + list[i].title + " " + list[i].dueDate;
    } else {
      if (list[i].completed != true) {
        OUTPUT_STRING = OUTPUT_STRING + "[ ] " + list[i].title + " ";
      } else {
        OUTPUT_STRING = OUTPUT_STRING + "[x] " + list[i].title + " ";
      }
    }

    return OUTPUT_STRING;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
