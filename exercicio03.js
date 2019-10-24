function temHabilidade(skills) {
  skills = ["Javascript", "ReactJS", "React Native"];
  if (skills.indexOf("Javascript") != -1) {
    return true;
  } else {
    return false;
  }
}

console.log(temHabilidade());
