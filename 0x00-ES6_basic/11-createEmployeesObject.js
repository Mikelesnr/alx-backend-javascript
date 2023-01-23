#!/usr/bin/node
//jshint esversion:6

export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: [
      ...employees,
    ],
  };
}