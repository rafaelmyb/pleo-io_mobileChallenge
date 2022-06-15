import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, Pressable} from 'react-native';
import axios from 'axios';
import ExpenseCard from '../../components/ExpenseCard';
import SearchBar from '../../components/SearchBar';
import {Container} from './styles';
import moment from 'moment';

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
  const [, setFilterOption] = useState();

  const filteredExpenses = useMemo(
    () =>
      expenses.filter(
        expense =>
          expense.merchant.toLowerCase().includes(searchText.toLowerCase()) ||
          expense.user.first.toLowerCase().includes(searchText.toLowerCase()) ||
          expense.user.last.toLowerCase().includes(searchText.toLowerCase()) ||
          expense.user.email.toLowerCase().includes(searchText.toLowerCase()) ||
          expense.amount.value
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          expense.amount.currency
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          expense.date.toLowerCase().includes(searchText.toLowerCase()),
      ),
    [expenses, searchText],
  );

  const url = 'http://192.168.100.102:3000/expenses?limit=168';

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
    receipts: string[],
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
                moment(item.date).format('DD MMM, YYYY | hh:mm a'),
                item.comment,
                item.receipts,
              )
            }>
            <ExpenseCard
              merchant={item.merchant}
              user={item.user}
              amount={item.amount}
              dateTime={moment(item.date).format('DD MMM, YYYY | hh:mm a')}
              comment={item.comment}
              receipts={item.receipts}
            />
          </Pressable>
        )}
      />
    </Container>
  );
}
