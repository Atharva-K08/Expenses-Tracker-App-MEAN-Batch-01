import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionService } from '../../app/services/transaction-service';
@Component({
  selector: 'app-transaction-page',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './transaction-page.html',
  styleUrl: './transaction-page.css',
})
export class TransactionPage implements OnInit {
  typeFilter: string = 'all';
  categoryFilter: string = 'all';
  transactions: any[] = [];
  filteredTranscations: any[] = [];
  categories: any[] = [];
  categoryForm!: FormGroup;
  transactionForm!: FormGroup;
  constructor(
    private transactionService: TransactionService,
    private cdr: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this.transactionService.getCategory().subscribe((res: any) => {
      this.categories = res.data;
      this.cdr.detectChanges();
    });
    this.transactionService.getTransactions().subscribe((res: any) => {
      this.transactions = res.data;
      this.filteredTranscations = res.data;
      this.cdr.detectChanges();
    });
    this.categoryForm = new FormGroup({
      name: new FormControl(''),
    });
    this.transactionForm = new FormGroup({
      type: new FormControl(''),
      currency: new FormControl(''),
      amount: new FormControl(''),
      description: new FormControl(''),
      method: new FormControl(''),
      category: new FormControl(''),
      date: new FormControl(''),
      status: new FormControl(''),
    });
  }
  submitCategory = () => {
    if (this.categoryForm.valid) {
      console.log('category submit: ', this.categoryForm.value);
      this.transactionService.addCategory(this.categoryForm.value).subscribe((res) => {
        console.log('category added: ', res);
        this.categoryForm.reset();
        this.transactionService.getCategory().subscribe((res: any) => {
          this.categories = res.data;
          this.cdr.detectChanges();
        });
      });
    }
  };
  submitTransaction = () => {
    if (this.transactionForm.valid) {
      console.log('transaction submit: ', this.transactionForm.value);
      this.transactionService.addTransaction(this.transactionForm.value).subscribe((res) => {
        console.log('transaction added: ', res);
        this.transactionForm.reset();
        this.transactionService.getTransactions().subscribe((res: any) => {
          this.transactions = res.data;
          this.cdr.detectChanges();
        });
      });
    }
  };
  resetFilter = () => {
    ((this.typeFilter = 'all'), (this.categoryFilter = 'all'));
    this.filteredTranscations = this.transactions;
  };
  applyFilter = () => {
    console.log('filter', this.typeFilter);
    this.filteredTranscations = this.transactions;
    if (this.typeFilter !== 'all') {
      this.filteredTranscations = this.filteredTranscations.filter((transaction) => {
        return transaction.type == this.typeFilter;
      });
    }
    if (this.categoryFilter !== 'all') {
      this.filteredTranscations = this.filteredTranscations.filter((transaction) => {
        return transaction.category._id == this.categoryFilter;
      });
    }
    this.cdr.detectChanges();
  };
}
