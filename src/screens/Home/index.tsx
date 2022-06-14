import React, {useEffect, useState} from 'react';
import {FlatList, Pressable} from 'react-native';
import axios from 'axios';
import ExpenseCard from '../../components/ExpenseCard';
import SearchBar from '../../components/SearchBar';
import {Container} from './styles';

interface Expense {
  id: string;
  amount: {
    value: string;
    currency: string;
  };
  date: string;
  merchant: string;
  receipts: any[];
  comment: string;
  category: string;
  user: {
    first: string;
    last: string;
    email: string;
  };
}

interface ExpensesResponse {
  expenses: Expense[];
}

export default function Home({navigation}: any) {
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: '',
      amount: {
        value: '',
        currency: '',
      },
      category: '',
      date: '',
      comment: '',
      merchant: '',
      receipts: [],
      user: {
        first: '',
        last: '',
        email: '',
      },
    },
  ]);
  // const [limitOfExpenses, setLimitOfExpenses] = useState('25');
  // const [isLoading, setIsLoading] = useState(true);

  const url = 'http://192.168.100.102:3000/expenses';

  useEffect(() => {
    async function fetchData() {
      await axios.get<ExpensesResponse>(url).then(response => {
        setExpenses(response.data.expenses);
      });
    }
    fetchData();
  }, [url]);

  function handleNavigation(
    merchant: string,
    user: {
      email: string;
      first: string;
      last: string;
    },
    amount: {
      value: string;
      currency: string;
    },
    date: string,
    comment: string,
    receipts: any[],
  ) {
    navigation.navigate('ExpenseDetails', {
      merchant,
      user,
      amount,
      date,
      comment,
      receipts,
    });
  }

  return (
    <Container>
      <SearchBar />
      <FlatList
        data={expenses}
        keyExtractor={expense => expense.id}
        renderItem={({item}) => (
          <Pressable
            onPress={() =>
              handleNavigation(
                item.merchant,
                item.user,
                item.amount,
                item.date,
                item.comment,
                item.receipts,
              )
            }>
            <ExpenseCard
              merchant={item.merchant}
              user={item.user}
              amount={item.amount}
              dateTime={item.date}
              comment={item.comment}
              receipts={item.receipts}
            />
          </Pressable>
        )}
      />
    </Container>
  );
}
