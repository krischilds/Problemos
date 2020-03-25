import React from "react";
import LinkedList from "./LinkedList";

const LinkedListProblems = () => {
  const output1 = LinkedListProblem();
  //  console.log(output1);
  return (
    <div className="alert alert-info" role="alert">
      <h4 className="alert-heading">Logic Problems Completed</h4>
      <p className="mb-0">{output1}</p>
      <hr />
    </div>
  );
};

const LinkedListProblem = () => {
  let list1 = new LinkedList();
  list1.add("1");
  list1.add("2");
  list1.add("4");
  list1.print();

  let list2 = new LinkedList();
  list2.add("1");
  list2.add("3");
  list2.add("4");

  let list3 = LinkedList.merge(list1, list2);
  list3.print();
  return (
    <div>
      <h6>Completed: Merge 2 Linked Lists</h6>
      <p>
        <div>L1: {list1.getLength()}</div>
        <div>L2: {list2.getLength()}</div>
        <div>L3: {list3.getLength()}</div>
      </p>
    </div>
  );
};

export default LinkedListProblems;
