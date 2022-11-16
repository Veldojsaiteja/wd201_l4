const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1).toLocaleString("en-CA");

  var today = new Date().toLocaleString("en-CA");

  var tom = new Date();
  tom.setDate(tom.getDate() + 1).toLocaleString("en-CA");
  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    var od = [];
    for (var i = 0; i < all.length; i++) {
      if (all[i].dueDate == yesterday) {
        od.push(all[i]);
      }
    }
    return od;
  };

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    var dt = [];
    for (var i = 0; i < all.length; i++) {
      if (all[i].dueDate == today) {
        dt.push(all[i]);
      }
    }
    return dt;
  };

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    var dl = [];
    for (var i = 0; i < all.length; i++) {
      if (all[i].dueDate == tom) {
        dl.push(all[i]);
      }
    }
    return dl;
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    // return OUTPUT_STRING
    var OUTPUT_STRING = "", i = 0;
    for (i = 0; i < list.length - 1; i++) {
      if (list[i].dueDate != today) {
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

    if (list[i].dueDate != today) {
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
