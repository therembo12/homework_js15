// TASK 1
sub.addEventListener("click", () => {
  if (task1.Login.value.trim() == "") {
    alert("Enter Your Login");
  } else {
    task1.Rem.checked
      ? alert(`Привет ${task1.Login.value} я вас запомнил`)
      : alert(`Привет ${task1.Login.value} я вас ne запомнил`);
  }
});
// TASK 2
signup.addEventListener("click", (event) => {
  //   event.preventDefault();
  if (
    task2.Login.value.trim() == "" ||
    task2.Pass.value.trim() == "" ||
    task2.Email.value.trim() == ""
  ) {
    alert("Enter Data!!");
  } else if (
    task2.Pass.value.trim() < 8 &&
    task2.Pass.value.trim() !== task2.Pass_confirm.value.trim()
  ) {
    alert("Wrong Password");
  } else {
    alert(`На почту ${task2.Email.value} отправленно письмо с подтверждением`);
  }
});
// TASK 3
function newData(firstname, lastname, birthday, gender, country, city, skills) {
  return {
    firstname: firstname,
    lastname: lastname,
    birthday: birthday,
    gender: gender,
    country: country,
    city: city,
    skills: skills,
  };
}
save.addEventListener("click", (event) => {
  event.preventDefault();
  skillValue = new Array();
  for (let i = 0; i < task3.skills.length; i++) {
    if (task3.skills[i].checked) {
      skillValue.push(task3.skills[i].value);
    }
  }
  let inputData = newData(
    task3.firstname.value,
    task3.lastname.value,
    task3.birthday.value,
    task3.gender.value,
    task3.country.value,
    task3.city.value,
    skillValue
  );
  Firstname.textContent = `${inputData.firstname}`;
  Lastname.textContent = `${inputData.lastname}`;
  Birthday.textContent = `${inputData.birthday}`;
  Gender.textContent = `${inputData.gender}`;
  Country.textContent = `${inputData.country}`;
  City.textContent = `${inputData.city}`;
  Skills.textContent = `${skillValue.join(', ')}`;

  console.log(skillValue);
});
