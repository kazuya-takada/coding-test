import { calc, input, Result } from "./calc";

describe('unit test: calc', () => {
  // 前提として、対象のお金は「傷なしの日本円」となる。それ以外のお金は対象外の枚数にのみ反映される
  // また、日本円の場合「1,000円以上」ならお札、未満なら硬貨と判定

  const result: Result = calc(input)

  it('傷がない日本円のお金のみ、合計金額に合算される', () => {
    expect(result.totalAmount).toBe(1100)
  });

  it('傷がない日本円のお金のみ、紙幣・硬貨枚数に含まれ、傷があるものと傷なし外貨については対象外の枚数に含まれる', () => {
    expect(result.totalBillCount).toBe(1)
    expect(result.totalCoinCount).toBe(1)
    expect(result.totalOtherCount).toBe(3)
  })
})
