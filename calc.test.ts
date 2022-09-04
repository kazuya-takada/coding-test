import { calc, Money, Result } from "./calc";

describe('unit test: calc', () => {
  // 前提として、対象のお金は「傷なしの日本円」となる。それ以外のお金は対象外の枚数にのみ反映される
  // また、日本円の場合「1,000円以上」ならお札、未満なら硬貨と判定

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

  const result: Result = calc(input)

  it('傷がない日本円のお金のみ、合計金額に合算される', () => {
    expect(result.totalAmount).toBe(1100)
  });

  it('傷がない日本円は1000円以上がお札にカウントされ、1000円未満は硬貨としてカウントされる', () => {
    expect(result.totalBillCount).toBe(1)
    expect(result.totalCoinCount).toBe(1)
  })

  it('傷があるお金と外貨は対象外のお金にカウントされる', () => {
    expect(result.totalOtherCount).toBe(3)
  })
})
