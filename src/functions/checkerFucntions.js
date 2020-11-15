//classchecker function to remove or add a class
const classChecker = (element, classToBeChecked, classToBeAdded) => {
  if (element.classList.contains(classToBeChecked)) {
    element.classList.remove(classToBeChecked);
    element.classList.add(classToBeAdded);
  } else {
    element.classList.add(classToBeAdded);
  }
};

/*
let counter = 0;

    for (let i = 0; i < formGroups.length; i++) {
      if (!formGroups[i].classList.contains("specialCode")) {
        if (
          formGroups[i].lastElementChild.value.trim() !== "" &&
          formGroups[i].lastElementChild.value !== "Select gender"
        ) {
          counter += 1;

          classChecker(formGroups[i], "invalid-error", "success");
        } else {
          classChecker(formGroups[i], "success", "invalid-error");
        }
      }
    }

  */

//counter function for classes
const counterCheckerForClasses = (
  array,
  classToBeChecked,
  classToBeAdded,
  classToBeExcluded,
  containValue
) => {
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    if (!array[i].classList.contains(classToBeExcluded)) {
      if (
        array[i].lastElementChild.value.trim() !== "" &&
        array[i].lastElementChild.value !== containValue
      ) {
        counter += 1;

        classChecker(array[i], classToBeChecked, classToBeAdded);
      } else {
        classChecker(array[i], classToBeAdded, classToBeChecked);
      }
    }
  }

  return counter;
};

const counterCheckerForReservationConfirm = (
  array,
  classToBeChecked,
  classToBeAdded,
  classToBeExcluded,
  containValue1,
  containValue2
) => {
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    if (!array[i].classList.contains(classToBeExcluded)) {
      if (
        array[i].lastElementChild.value.trim() !== "" &&
        array[i].lastElementChild.value !== containValue1 &&
        array[i].lastElementChild.value !== containValue2
      ) {
        counter += 1;

        classChecker(array[i], classToBeChecked, classToBeAdded);
      } else {
        classChecker(array[i], classToBeAdded, classToBeChecked);
      }
    }
  }

  return counter;
};

export {
  classChecker,
  counterCheckerForClasses,
  counterCheckerForReservationConfirm,
};
