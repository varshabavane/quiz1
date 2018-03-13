import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ResultPage } from "../result/result";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  counter = 0;

  ans = [];

  question = [
    {
      q: " Can you access cookie using javascript",
      a: "true",
      b: "false",
      c: "",
      d: "",
      ans: "true",
      isDisable: false
    },
    {
      q: " Which of the following is the correct syntax to redirect a url using javascript",
      a: 'document.location="http://www.newlocation.com"',
      b: 'window.location="http://www.newlocation.com',
      c: 'browser.location="http://www.newlocation.com"',
      d: 'navigation.location="http://www.newlocation.com"',
      ans: 'window.location="http://www.newlocation.com"',
      isDisable: false
    },

    {
      q: " Full form of DOM:",
      a: "Document Object Model",
      b: "document Oriented Model",
      c: "data object Model",
      d: "data oriented Model",

      ans: "Document Object Model",
      isDisable: false
    },
    {
      q: " Where is RAM Located",
      a: "Exapansion Board",
      b: "External Drive",
      c: "Mother Board",
      d: "All of the above",
      ans: "Mother Board",
      isDisable: false
    },

    {
      q:
        " Which of the following function of array objects sorts the element of an array?",
      a: "toSource()",
      b: "sort()",
      c: "toString()",
      d: "unshift",
      ans: "sort()",
      isDisable: false
    },

    {
      q:
        " which of the following function of string object returns the primitive value of specified object?",
      a: "totoUpperCase()",
      b: "LocaleUpperCase()",
      c: "toString",
      d: "valueOf()",
      ans: "LocaleUpperCase()",
      isDisable: false
    },

    {
      q:
        " which of the function is used to combine the text of two string & returns the new string",
      a: "Merge()",
      b: "concat()",
      c: "append()",
      d: "add()",
      ans: "concat()",
      isDisable: false
    },

    {
      q: " URL Stands for",
      a: "Uniform Resource Locator",
      b: "Unified Resource Locator",
      c: "Uniform Rsource Link",
      d: "Unified Rsource Link",
      ans: "Uniform Resource Locator",
      isDisable: false
    },

    {
      q: " who was the father of Bluetooth",
      a: "Ericson",
      b: "charles Babbage",
      c: "Apple",
      d: "Steve Jobs",
      ans: "Ericson",
      isDisable: false
    },

    {
      q: " Who was the father of Internet?",
      a: "Steve Jobs",
      b: "vint Cerf",
      c: "martin Coope",
      d: "Dennis Riche",
      ans: "vint cerf",
      isDisable: false
    }
  ];

  constructor(public navCtrl: NavController) {}

  ansChck(a, i) {
    console.log("checked value " + a + " " + i);

    if (a === this.question[i].ans) {
      if (this.ans.indexOf(a) === -1) {
        this.ans.push(a);
        this.counter = this.counter + 1;
      }
    } else {
      this.counter = this.counter;
    }
  }

  submit() {
    alert("score: " + this.counter + " / 10");
    this.navCtrl.push(ResultPage, { marks: this.counter });
  }
}
