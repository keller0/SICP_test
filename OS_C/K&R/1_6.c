#include <stdio.h>

/* count digits, white space, others */
int main()
{
    int c, i, nwhite, nother;
    int digits[10];

    nwhite = nother = 0;
    for (i = 0; i < 10; ++i)
        digits[i] = 0;
    while ((c = getchar()) != EOF)
        if (c >= '0' && c <= '9')
            ++digits[c-'0'];
        else if (c == ' ' || c == '\t' || c == '\n')
            ++nwhite;
        else
            ++nother;

    printf("digits = ");
    for (i = 0; i < 10; ++i)
        printf(" %d",digits[i]);
    printf(" white space = %d, other = %d\n",
           nwhite, nother);

}
