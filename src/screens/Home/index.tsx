import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';
import ExpenseCard from '../../components/ExpenseCard';
import SearchBar from '../../components/SearchBar';
import ExpensesService from '../../services/ExpensesService';
import {Container, Text} from './styles';

interface Expense {
  id: string;
  amount: {
    value: string,
    currency: string
  };
  date: string;
  merchant: string;
  receipts: any[];
  comment: string;
  category: string;
  user: {
    first: string,
    last: string,
    email: string
  };
}

interface ExpensesResponse {
  expenses: Expense[];
}

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: '',
      amount: {
        value: '',
        currency: ''
      },
      category: '',
      date: '',
      comment: '',
      merchant: '',
      receipts: [],
      user: {
        first: '',
        last: '',
        email: ''
      },
    }
  ]);
  const [limitOfExpenses, setLimitOfExpenses] = useState('25');
  const [isLoading, setIsLoading] = useState(true);

  const url = 'http://192.168.100.102:3000/expenses'

  useEffect(() => {
    async function fetchData() {
      await axios.get<ExpensesResponse>(url).then(response => {
        setExpenses(response.data.expenses);
      });
    }
    fetchData();
  }, [url]);

  // const loadExpenses = useCallback(async () => {
  //   try {
  //     setIsLoading(true);

  //     const expensesList = await ExpensesService.listExpenses('25');

  //     console.log('Chegamos aqui: ', expensesList)

  //     setExpenses(expensesList);
  //   } catch (error) {
  //     console.log('Chegamos aqui: ', error)
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, [limitOfExpenses]);

  return (
      <Container>
        {/* {expenses.map((expense) => (
          <Text key={expense.id}>{expense.id}</Text>
        ))} */}
          <FlatList
          data={expenses}
          keyExtractor={(expense) => expense.id}
          renderItem={({item}) => (
            <Text>{item.merchant}</Text>
          )} />
      </Container>
      // <Container>
      //   <SearchBar />
      //   <ExpenseCard />
      // </Container>
  )
}