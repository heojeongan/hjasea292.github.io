# 👇🏻 YOUR CODE 👇🏻:

def get_yearly_revenue(monthly_revenue):
    return monthly_revenue * 12
def get_yearly_expenses(monthly_expenses):
    return monthly_expenses * 12
def get_tax_amount(profit):
    # 이익을 인자로 받아서, 이익이 100,000보다 크면 25% 세율을 적용하고, 크지 않으면 15% 세율을 적용해서 세금금액을 리턴하는 함수
    if(profit >= 100000):
        return int(profit * 0.25)
    else:
        return int(profit * 0.15)
def apply_tax_credits(tax_amount, tax_credits):
    return int(tax_amount * tax_credits)

# BLUEPRINT | DONT EDIT

monthly_revenue = 5500000
monthly_expenses = 2700000
tax_credits = 0.01

yearly_revenue = get_yearly_revenue(monthly_revenue)
yearly_expenses = get_yearly_expenses(monthly_expenses)

profit = yearly_revenue - yearly_expenses

tax_amount = get_tax_amount(profit)

final_tax_amount = tax_amount - apply_tax_credits(tax_amount, tax_credits)

print(f"Your tax bill is: ${final_tax_amount}")

# /BLUEPRINT
