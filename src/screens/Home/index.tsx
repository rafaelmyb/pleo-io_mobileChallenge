import React, {useEffect, useMemo, useState} from 'react';
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
  const [searchText, setSeachText] = useState('');
  const [filterOption, setFilterOption] = useState();

  const filteredExpenses = useMemo(
    () =>
      expenses.filter(expense =>
        expense.merchant.toLowerCase().includes(searchText.toLowerCase()),
      ),
    [expenses, searchText],
  );

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
    id: string,
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
      id,
      merchant,
      user,
      amount,
      date,
      comment,
      receipts,
    });
  }

  console.log(filterOption);

  return (
    <Container>
      <SearchBar
        searchText={searchText}
        setSearchText={setSeachText}
        setFilterOption={setFilterOption}
      />
      <FlatList
        data={filteredExpenses}
        keyExtractor={expense => expense.id}
        renderItem={({item}) => (
          <Pressable
            onPress={() =>
              handleNavigation(
                item.id,
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
