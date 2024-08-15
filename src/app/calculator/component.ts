import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculator',
  templateUrl: './component.html', 
  styleUrls: ['./component.css'],
  standalone: true, 
  imports: [FormsModule],
})
export class CalculatorComponent {
  currentInput: string = '';
  operator: string = '';
  previousInput: string = '';

  appendNumber(number: string) {
    this.currentInput += number;
  }

  chooseOperation(operation: string) {
    if (this.currentInput === '') return;
    if (this.previousInput !== '') {
      this.compute();
    }
    this.operator = operation;
    this.previousInput = this.currentInput;
    this.currentInput = '';
  }

  clear() {
    this.currentInput = '';
    this.previousInput = '';
    this.operator = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousInput);
    const current = parseFloat(this.currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operator) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '/':
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentInput = computation.toString();
    this.operator = '';
    this.previousInput = '';
  }
}
