# React-ReduxToolkit-CounterHistoryApp

React + TypeScript + Redux Toolkit を使用して、カウンターの現在値と変更履歴を管理する練習用アプリです。

## 概要

カウンターの値をRedux Storeで管理し、カウントが変更されるたびに履歴を保存します。

履歴は最新の値が先頭になるように管理し、履歴のリセットも実装しています。

## 使用技術

* React
* TypeScript
* Redux Toolkit
* React Redux
* Tailwind CSS
* Vite

## 機能

* カウンターを1増加
* カウンターを1減少
* カウント変更時に履歴を保存
* 最新の履歴を上から表示
* 履歴をリセット
* 履歴がない場合のメッセージ表示

## ディレクトリ構成

```text
src/
├── app/
│   └── store.ts
├── features/
│   ├── components/
│   │   ├── ControlPanel.tsx
│   │   └── CounterHistory.tsx
│   ├── slices/
│   │   └── CounterHistory.ts
│   └── types/
│       └── CounterType.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## Redux構成

### State

```ts
interface CounterType {
  count: number;
  history: number[];
}
```

### Actions

| Action         | 処理              |
| -------------- | --------------- |
| `increment`    | カウントを1増加し、履歴に追加 |
| `decrement`    | カウントを1減少し、履歴に追加 |
| `clearHistory` | 履歴を空にする         |

### State更新の流れ

```text
Component
    ↓
dispatch(action)
    ↓
Redux Store
    ↓
Reducer
    ↓
State更新
    ↓
useSelector
    ↓
Componentに反映
```

## コンポーネント

### ControlPanel

カウンターの増減を操作します。

```text
+ → increment
- → decrement
```

現在のカウント値は `useSelector` でRedux Storeから取得します。

### CounterHistory

Redux Storeから `history` を取得して表示します。

履歴の追加には `unshift()` を使用しているため、最新の値が先頭に表示されます。

```ts
state.history.unshift(state.count);
```

## Redux Toolkitの役割

### createSlice

StateとReducer、Actionをまとめて定義します。

```ts
const counterHistorySlice = createSlice({
  name: "counterHistory",
  initialState,
  reducers: {
    increment: ...,
    decrement: ...,
    clearHistory: ...,
  },
});
```

### useDispatch

ComponentからActionをRedux Storeへ送ります。

```ts
dispatch(increment());
dispatch(decrement());
```

### useSelector

Redux Storeが管理しているStateを取得します。

```ts
const count = useSelector(
  (state: CounterType) => state.count
);
```

## 学習ポイント

* Redux Toolkitの基本構成
* `createSlice` の使い方
* `configureStore` にReducerを登録する方法
* Action creatorとReducerの関係
* `useDispatch` によるActionのDispatch
* `useSelector` によるStateの取得
* Redux StoreとComponent間のデータの流れ
* Stateにカウンター値と履歴をまとめて管理する方法
