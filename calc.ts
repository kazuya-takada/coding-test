export type Money = {
  amount: number
  isDamaged: boolean
  unit: string
}

export type Result = {
  totalAmount: number
  totalBillCount: number
  totalCoinCount: number
  totalOtherCount: number
}

/**
 * 標準出力関数
 */
const output = (result: Result): void => {
  const { totalAmount, totalBillCount, totalCoinCount, totalOtherCount } = result

  console.log(`合計金額：${totalAmount}円`)
  console.log(`紙幣の枚数：${totalBillCount}枚`)
  console.log(`硬貨の枚数：${totalCoinCount}枚`)
  console.log(`対象外の枚数：${totalOtherCount}枚`)
}

/**
 * メインとなる計算関数 
 */
export const calc = (monies: Money[]): Result => {
  let result: Result = {
    totalAmount: 0,
    totalBillCount: 0,
    totalCoinCount: 0,
    totalOtherCount: 0
  }

  monies.forEach(({ amount, isDamaged, unit }) => {
    if (isDamaged || unit !== '円') result.totalOtherCount += 1
    else {
      result.totalAmount += amount
      // 1000円以上なら紙幣と判定。未満なら、硬貨と判定
      amount >= 1000 ? result.totalBillCount += 1 : result.totalCoinCount += 1
    }
  })

  output(result)

  return result
}


const input: Money[] = [
  {
    amount: 100,
    isDamaged: false,
    unit: '円'
  },
  {
    amount: 1000,
    isDamaged: false,
    unit: '円'
  },
  {
    amount: 500,
    isDamaged: true,
    unit: '円'
  },
  {
    amount: 1,
    isDamaged: false,
    unit: 'ドル'
  },
  {
    amount: 10,
    isDamaged: true,
    unit: 'ウォン'
  },
]

// 関数の実行(yarn dev もしくは npm run dev)
calc(input)