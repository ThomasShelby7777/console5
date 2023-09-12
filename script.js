const object = [];

while (true) {

  var command = prompt("Введите команду: ");

  if (command === "stop") {
    break;
  }

  var [command, value] = command.split(", ");

  switch (command) {
    case "add":
    object.push(value);
      console.log(object);
      break;
    case "del":
    object.splice(object.indexOf(value), 1);
      console.log(object);
      break;
    default:
      console.log("Неизвестная команда");
  }
}