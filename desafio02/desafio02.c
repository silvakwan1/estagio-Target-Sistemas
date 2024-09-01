#include <stdio.h>

int is_Fibonaci(int num){

int fn1 = 0,fn2 = 1;

while (fn1 <= num)
{

    if (fn1 == num)
    {
       return  printf("O numero %d pertence a sequencia de Fibonacci.\n", num);
    }

    int soma = fn1 + fn2;
    fn1 = fn2;
    fn2 = soma;
}
    return printf("O numero %d nao pertence a sequencia de Fibonacci.\n", num);
}

int main(){
    
    int num;
    
    printf("Digite o numero que deseja saber se e um Fibonacci: ");
    scanf("%d", &num);
    is_Fibonaci(num);
}