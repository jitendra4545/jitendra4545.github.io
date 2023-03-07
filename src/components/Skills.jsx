import { Box, Heading, SimpleGrid, Image, Text } from '@chakra-ui/react'

const data = [
    
{
    imgURL: 'https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png',
    name: 'HTML',
    color:'orange'
},
{
    imgURL: 'https://manojattri.vercel.app/static/media/css.69a82c2d9e45c933a9cb.png',
    name: 'CSS',
    color:'skyblue'
},
{
    imgURL: 'https://manojattri.vercel.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png',
    name: 'Javascript',
    color:'yellow'
},
{
    imgURL: 'https://manojattri.vercel.app/static/media/react.0cf951a69d8e58f83f9d.png',
    name: 'React',
    color:'teal'
},
{
    imgURL: 'https://manojattri.vercel.app/static/media/redux.1b4bb5fceb01b19da59d.png',
    name: 'Redux',
    color:'violet'
},
// {
//     imgURL: 'https://manojattri.vercel.app/static/media/tailwind.e47ac876b8d4d0bba47a.png',
//     name: 'Tailwind',
//     color:'teal'
// },

{
    imgURL: 'https://manojattri.vercel.app/static/media/chakra.e4cb472ccaabf22affba.png',
    name: 'Chakra UI',
    color:'teal'
},
{
    imgURL: 'https://manojattri.vercel.app/static/media/typescript.9b1779a2fd3504559e59.png',
    name: 'TypeScript',
    color:'teal'
},
// {
//     imgURL: '	https://manojattri.vercel.app/static/media/jest.809768de8350fa5f6a21.png',
//     name: 'Jest',
//     color:'red'
// },
{
imgURL:"https://manojattri.vercel.app/static/media/node.952a9ea986dcfa5229ad.png",
name: 'NodeJS',
color:'orange'
},
{
    imgURL:"https://manojattri.vercel.app/static/media/express.cca64e0f360897258ecb.png",
    name:"Express",
    color:'black'
},
{
    imgURL:"data:image/png;base64,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",
    name:"MongoDB",
    color:'green'
}


]


const tools=[
    {
        imgURL:"data:image/png;base64,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",
        name:"GitHub",
        color:'black'
    },
    {
        imgURL:"data:image/png;base64,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",
        name:"PostMan",
        color:'orange'
    },
    {
        imgURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoYAAAKGCAYAAADXilp5AAAecUlEQVR42u3dC5RcdZ3g8f+9VV3dXd2dTndCeOQBGAOKu8NjAYVBcCTCyOHpuDoDOqzzcERdjuucs7sqsjMqzszuWcfFBz6XQUFxdAUCiwoZBVQYhYXgI5CESICEAEm60+nu6lfVvXv+nfASExJIuqq7Pp9zOOGRpIrf/3+rvnUrdSvJ8zzMJPnQUBKGK2k2MlzM+ra2Z09t6sn6t/RmA4O92eBQb16pdGfjY52hWmsJExPtM+x/HwB4GZIkhNDSMhKKhYm01DqUlMsDaVdnX9rd1Zf2zOlL5+3Xn/bOHknbO6qho5wlnZ0zqiSK0z4E+/rT2iOPdFXXPTK/+tj6xRPr1/9Z/LG6cdP8fHS0Pa9mhVCrFvI8T0OeJ7Y8ALCHtZgnSZKFQrGWFNNa0tY2Ujxwvw3FhQvWlubPv7KwaOFDxUMO3lA4+ODBpLcnm9b/q9PtjGHevzWtPbGxvbpq1aKxe+9/4/ia37y7umXLvGxL/9y8WivavQDAlMZUsVBN5/RsLs6Z81RpySu+1HrMkT8sHn74o4UDDhxJemZPq1CcHmFYqSTVh9Z2jt199zFj9//izeMr17yrurlvP2cAAYDGq6skL87t3VQ6YsmVrUf+3vdajzvu3uIrFw+Fcrnho6uhwzB75NHSxIr7Fld+dMf5Y7968N1iEACYjpHY+m9e9aXyH5z8jZajjl6bHrxoXBjugerKlZ2jtyxfOnLnzy4bX/Pw4XmWFewsAGBaN2Ka1kpLDl3VfuJrP9J22tLlxSOOGBKGuwrCu+/pHf7+D84buePOy6pPbdnfFgIAZqLivDlPtp984kc6/vD064rHHdsnDJ8bhCtWdFeW/d+3VX5858cFIQDQTIFYPumES8vnnPmt4lFHDTR1GNbWPtQ2csNNZw5979bPCkIAoJkDsfPNb3p/+zln3lRY/MrRpgrDeMmZ0VtuOXLwO9d9Ynz1w2fYDgAAIZQOO/Tmrreed0nbaafdX49L3Ux5GFbvW9E9dM03Lx6+7a5L8onxki0AAPCcOGspjXe84YRPdF7wJ5cXj57at5enLAzjWcKRG286ftu13/52dcOTCyw7AMDOFefvv37W29/6tvazz/rZVJ09nJIwrK1e3T545VXvH/6XH388HxtvtdQAALsRaq2lsY5TX//Rrndd+NnCYYeNTPswHL/9jgMHvvDlz42tXHOe5QUA2HOtRyy5rvs9f/m+0iknb5yeYVipJCPfvf7YgauuudEnjgEAXp74yeXuCy84q/0t596zr75eb5+EYd7fnw5f9fWzt1173TXZyEjZUgIAvHxpe3tl1h+fd0HHhe9clvT07PU/d7jXwzDb+ERx8Iov/tXQzbf+Yz5RbbGEAAB7Md5aihOdZyz9666L3nNFeuAB1YYNw+zRx0oD/3j5h4d/9NOPhjxLLR0AwL6owzTrPPWkv+36wMV/V1i4YKLhwjBbt6609VOf/ljl9n/9L1YLAGBfx2GSd5x8wt93f/Div0kPOWR8b/yWe+WsXu2x9S0Dn7r8byp3/Ow/WyUAgCmQ58nwHXf913hiLrZYQ4Rh9sSTxcFPX/6h4dvv/FC8g1YJAGDq4jC+WxtbLDZZXcMwfvp48PNf+KvhH/7kUisDAFAfscVik8U2q0sY5sPDyfCVXzt36OZ/+VSeZQVLAgBQH7HFYpPFNouNNuVhOHr9smO3/fN1V+cT4yXLAQBQ5zicGC/FNouNNqVhGL/mbutV1yzLRkbbLQMAQGOIbTbwT1ffGFttSsKwtmZN+8AVX/p87cnNBxg/AEBjiV9FPNlqa9bs8Qm8PQrDfNu2ZPCfvnbR2INrzzF2AIDGFFtt8Mqr3hvbbZ+F4egNy44fvvX2T7osDQBAA4vXOFx+x2Wjy248fp+EYfW+Fd0D3/z2d/Kx8VbTBgBo8DYcG28d+MY/fyc23F4Nw3hNnKFrvnlxdcOTC4wZAGB6iO0WG253r2+4Wz9p9JZbjxy+7a5LjBcAYHqJDRdbbq+EYW3t2rbB71z3CdcrBACYfmLDxZaLTfeyw3DkhhvPHF+z7s3GCgAwPcWWq1y/7KyXFYbVFSu6h26+9XM+hQwAMI3FTyl/b/lnX+yDKLsMw8oNN729umnLPNMEAJjeYtNVlt309pcUhtWf391b+cldHzNGAICZIbZdbLw9DsPhH9xyXvxKFSMEAJgZYtvFxtujMKyuXNk5csedlxkfAMDMMnL7nZ+MrbfbYTh6y/Kl1U39+xkdAMDMUt3cPze23m6FYbZuXaly579+MuRZanQAADNMnqWx9WLzvWgYjt+7YsnEmnWHmRoAwMwUW2/83nsP23UYjowkI7fdcUGeZQUjAwCYmWLrjdz2k/NDpZLsNAxrD63tHFu56s+NCwBgZovNV1v7m86dhuHYPf/vyNqW/jlGBQAws8Xmi+33O8MwGxhIx+67/wxvIwMAzHyx+WL7xQZ8QRjmGze2exsZAKB5xPbLHn+8/QVhOPHgg4uqm/tcuxAAoEnE9quuWrXoBWE4du/9bwx5nhgRAECTyPNksgGfG4Z5X386vuY37zYdAIDmEhswtuAzYVh75JGu6pYt84wGAKC5xAaMLfhMGFbXPTI/69vqMjUAAE0mNmBswWfD8LH1i/OJaovRAAA0l9iAsQUnwzAfGkomHnvMZWoAAJpUbMHYhGkYrqTV9RteYSQAAM1psgWHK2maj1QK1Y2b5hsJAECThuHGTfNjE6a1vv5yPjrabiQAAM0ptmBswjR7alNPXvX9yAAATRuG1awQmzDNtmyZG2pVYQgA0Kxq1ULWv6U3zYaGZud5npoIAEBzii2YbRvqTbNtA3N9RzIAQFOXYZJtG+xN8+FKt2kAADR5Gw4P9aTZ2FiXUQAANHkYTlTb0jA+4VI1AABNLpuYaEvzzAdPAACaXVKNZwwBAGh6eR6CMAQAYJIwBABAGAIAIAwBABCGAAAIQwAAhCEAAMIQAABhCACAMAQAQBgCACAMAQAQhgAACEMAAIQhAADCEAAAYQgAgDAEAEAYAgAgDAEAEIYAAAhDAACEIQAAwhAAAGEIAIAwBABAGAIAIAwBABCGAAAIQwAAhCEAAMIQAABhCACAMAQAQBgCACAMAQAQhgAACEMAAIQhAADCEAAAYQgAgDAEAEAYAgAgDAEAEIYAAAhDAACEIQAAwhAAAGEIAIAwBABAGAIAIAwBABCGAAAgDAEAEIYAAAhDAACEIQAAwhAAAGEIAIAwBABAGAIAIAwBABCGAAAIQwAAhCEAAMIQAABhCACAMAQAQBgCACAMAQAQhgAACEMAAIQhAADCEAAAYQgAgDAEAEAYAgAgDAEAEIYAAAhDAACEIQAAwhAAAGEIAIAwBABAGAIAIAwBABCGAAAIQwAAhCEAAMIQAABhCACAMAQAQBgCACAMAQAQhgAACEMAAIQhAADCEAAAYQgAgDAEAEAYAgAgDAEAEIYAAAhDAACEoREAACAMAQAQhgAACEMAAIQhAADCEAAAYQgAgDAEAEAYAgAgDAEAEIYAAAhDAACEIQAAwhAAAGEIAIAwBABAGAIAIAwBABCGAAAIQwAAhCEAAMIQAABhCACAMAQAQBgCACAMAQAQhgAACEMAAIQhAADCEAAAYQgAgDAEAEAYAgAgDAEAEIYAAAhDAACEIQAAwhAAAGEIAIAwBABAGAIAIAwBABCGAAAIQwAAhCEAAMIQAABhCACAMAQAQBgCACAMAQAQhgAACEMAABCGAAAIQwAAhCEAAMIQAABhCACAMAQAQBgCACAMAQAQhgAACEMAAIQhAADCEAAAYQgAgDAEAEAYAgAgDAEAEIYAAAhDAACEIQAAwhAAAGEIAIAwBABAGAIAIAwBABCGAAAIQwAAhCEAAMIQAICGUpzW9z7LQ16rWUV2KUmTEAoF+5XpsV/jXo171n4Fx7Aw3MPhtxZDYe68kKROfLKzTRJCNjgUsv6hOh+oeUjKraHY2x1L1bqw8x4bGAzZtuH67tcsD2lXe0hnd1sQ2JNH+iwL2ea+kE9M3xdV0zYM8/GJ0PKKRaH30g+Fwpy5k4sRktyuZMcGSUKSJCHPa6Hy3RvC1i9/LSSlUv3uzkQ1tL32mDD7P10c0nJHyPPcfuV5+zXE/VqdCMNfvyYMfO3bIe3qqN/dqU6EtuN+P3S/7z0haW2zX2F3nnPSNNS2bA59H/u7MP7g2pCUWoThVItDT+cvCOm8/WxKdvrqLe1ugLMeeQhpuRyKixaF0NFhYfjdJiZCOmtWCNV8MhRDXqcYy/KQdLSHdMGCkJTL1gV296G+rW3aBuHTpvd7WnkeknimEHaxR/I8b5z7Yr+yyyDL6heDv+PFTMPcF5gmkkY6hpsyDAEAEIYAAAhDAACEIQAAwhAAAGEIAIAwBABAGAIAIAwBABCGAAAIQwAAhCEAAMIQAABhCACAMAQAQBgCACAMAQAQhgAACEMAAIQhAADCEAAAYQgAgDAEAEAYAgAgDAEAEIYAAAhDAACEIQAAwhAAAGEIAMDMVTSCGSbLtv/VCAqFEJLEmrBTeZaFxH7Ffp22+zWv1UKS5/W/H0kSkjgThCHPV3vooVC5dXkI1WoISRrCVB+vSXygqIbC7J7Q/uY/DOkB+1sUdr5ff/mrMHLb7Tv2TlKX/RqPlbS3J7SfeWZI586xKOzUxIoVYfTHd4YkbtR67teDDgjtZ5wR0lmz6htjY2Nh/Lbbw/gvfxVCqTT183hmJrXQ8m9fE1pPOTkk8X4gDHlW9bH1YeDLXwvZ0GhIWgp1OUizwUpoPerVofWE44Uhu36ifWht2PqFK7efdSgU67dff++w0Pr6k4Qhu96vq1aHgS/G/ZqFJK3Pn8TKhiqh4w3Hh/ZT3hBCncMwRuroXT8LWz97ZUjn9dQnDEMe8sHRMOvdF4TW3z9xe6AiDHnuE10SktZSSMYn6vNEm8bbb5k8pZ94W47d2a+llhBq6fa3gbL67NfQ0uJtZHZrv8S9kqRZSApJXfZrOvn42tIwj695sRCSttaQxGMoq89bynm5NrkennOEITt7rp182ZZsfxCrw60nwcHJ7ofh9veC0h17tg63n9qz7NFDXAhJvn3PpvW5A420WydHEe9RktT546yO4b32+sMIZp7cAQLA1D7xIAwBABCGAAAIQwAAhCEAAMIQAABhCACAMAQAQBgCACAMAQAQhgAACEMAAIQhAAAIQwAAhCEAAMIQAABhCACAMAQAQBgCACAMAQAQhgAACEMAAIQhAADCEAAAYQgAgDAEAEAYAgAgDAEAEIYAAAhDAACEIQAAwhAAAGEIAIAwBABAGAIAIAwBABCGAAAIQwAAhCEAAMIQAABhCACAMAQAQBgCACAMAQAQhgAACEMAAIQhAADCEAAAYQgAgDAEAEAYAgAgDAEAEIYAAAhDAACEIQAAwhAAAGEIAIAwBABAGAIAIAwBABCGAAAIQwAAhCHA1EuS5/9Yl/tgGQCiohEAdVOrhXx4NOS1agiFOjwcpSHkg6MhGxsLIc+tByAMjQCol6SjI7S8+tAQankIxXq8gZGEfGQ0lBYuCKGlZEEAYWgEQL20Hn9cmHvIwu3v5dbr7dwsD6FUCoX951kQQBgaAVAvyZzeUJzTaxAADcKHTwAAEIYAAAhDAACEIQAAwhAAAGEIAIAwBABAGAIAIAwBABCGAAAIQwAAhCEAAMIQAABhCACAMAQAQBgCACAMAQAQhgAACEMAAIQhAADCEAAAYQgAgDAEAEAYAgAgDAEAEIYAAAhDAACEIQAAwhAAAGEIAIAw3PuSEPIksYrPm0kSkpA3zgI1wjxsEabR8UuDP+k0yt1IzON5KdMgd2WySab5YVyc7gdpkuchr9Umf2x2edo4nZ8kMU/ruzaTB2iWebJt5D2bZSGJa0QD7td8cn2Cx9dn1ic+qjXCS+94+5NLUufH1zzPdpxeyrfHUJ0Gk+TPPp7Ueybbb3t6P+dM2zBMCmnItvSHyrXXhqSjY8dR0uxhWAjVh9eFrFoLSaFQv4esUkuo9Q+EyvXLQqG3t65rE2967L4VIRT8qYlGVH3ggTD2k59uf15JBXzI8jD6i1+FpL1U38e0QiFMrF0XKldfU8fHkkZ70knC2K8fmFyXpJ5vtrUUw8QTT4Wha78VCh3lOu6TZPKF//gDq0PS0V7X/Zq0FMLEA6vDcNyv9XxhFWN5eHiyTZJp/Jwzfc8YFgqh+sSm0H/5V0KeicJnD5CWkJRbQ6jjk2zSUgy1LX1h4ItXb38FV++ZtJZC0layORrQxMoHQ99lnw6hGl9QCJDJ/dreuiMMQ12P4bFfrQ6jP/9lCMHj67OPJS0haavz42upJUw89njYevmXJ19I1HUe8cxYuVT3/RpjeeSeX4TKj++p+36NL3CTcttkowjDOsVh0tURnGdoQGlcm7K1YdcPosViSHtmhbyW7TgzJUImNcAYYhwm3UVr0YjHTaEYkq6i/fpbwRz/Yi88fRsB4NkFAGEIAIAwBABAGAIAIAwBABCGAAAIQwAAhCEAAMIQAABhCACAMAQAQBgCACAMAQAQhgAACEMAAIQhAADCEAAAYQgAgDAEAEAYAgAgDAEAEIYAAAhDAACEIQAAwhAAAGEIAIAwBABAGAIAIAwBABCGAAAIQ2hqSRKS1CH3/JEkhgDQQIpGAFMThbWtA2F8xf0haW8PIc/NpFAIE+sf2zEf8wAQhtAsXdhSDOP3/zps+uCHnKd/dioh1Krb/y4tGAeAMITmkWd5CJVRg/htqbeTAYQhiCAAaKynKSMAAEAYAgAgDAEAEIYAAAhDAACEIQAAwhAAAGEIAIAwBABAGAIAIAwBABCGAAAIQwAAhCEAAMIQAABhCACAMAQAQBgCACAMAQAQhgAACEMAAIQhAADCEAAAYQgAgDAEAEAYAgAgDAEAEIYAAAhDAACEIQAAwhAAAGEIAIAwBABAGAIAIAwBABCGAAAIQwAAhCEAAMIQAABhCACAMAQAQBgCACAMAQAQhgAACEMAAIQhAADCEAAAYQgAgDAEAEAYAgAgDAEAEIYAACAMAQAQhgAACEMAAIQhAADCEAAAYQgAgDAEAEAYAgAgDAEAEIYAAAhDAACEIQAAwhAAAGEIAIAwBABAGAIAIAwBABCGAAAIQwAAhCEAAMIQAABhCACAMAQAQBgCACAMAQAQhgAACEMAAIQhAADCEAAAYQgAgDAEAEAYAgAgDAEAEIYAAAhDAACEIQAAwhAAAGEIAIAwBABAGAIAIAwBABCGAAAIQwAAhCEAAMIQAABhCACAMAQAQBgCACAMAQAQhgAACEMAAIQhAAAIQwAAhCEAAMIQAABhCACAMAQAQBgCACAMAQAQhgAACEMAAIQhAADCEAAAYQgAgDAEAEAYAgAgDAEAEIYAAAhDAACEIQAAwhAAAGEIAIAwBABAGAIAIAwBABCGAAAIQwAAhCEAAMIQAABhCACAMAQAQBgCACAMAQAQhgAACEMAAIQhAADCEAAAYQgAgDAEAEAYAgAgDAEAEIYAAAhDAACEIQAAwhAAAGEIAIAwBABAGAIAIAwBABCGAAAIQwAAhCEAAMIQAACEIQAAwhAAgO2SJIQ0SZPMKAAAmlteLI6modQyYhQAAM0tbWkZTdPW1kGjAABobklLcTRNOsoDRgEA0ORh2NHZn6azujeHJMmNAwCgWaswydNZXX1p2tm5NUl8AAUAoHm7MMnSWZ19adrbuyUUijUjAQBoUoViLe2Z05em+8/rS4qpMAQAaFKxBdN5+/Wnhd6eStLW5pI1AADNGoZtbSOxCdOkvVwrHrjfBiMBAGhOsQVjE6aho5wVF8z/jZEAADRpGMYW7ChnadLZmZcWLPjfRgIA0JxaFi78amzCNP5DYdHCh5KW4oSxAAA0l9iAxYUL1sa/nwzD4iEHb0h7Z28xGgCA5hIbMLbgM2FYOPjgweKcOU8ZDQBAc4kNGFvwmTBMenuy0pJXfMloAACaS2zA2ILPhGHUesyRP/SdyQAATSRJ8skG3OGZMGx51aseLc7t3WRCAADNIbZf8fDDH31BGCYHHjjSesThXzUiAIDmENsvPeigkReEYdrdnbUefeTNSep7kwEAZrrYfLH9YgO+IAwnq/HYf3d/YU6Py9YAAMxwsfli+z333z0vDAuLXzHk7WQAgJkvNl9sv52GYSiX8/Y3nPQNbycDAMxcsfVi88X223kYxmvZHHPM6pYlh6w2MgCAmSm2Xmy+3/73LwjD9JBDxssnvO6SkKSZsQEAzDBJmpVPfN2HY/O9aBhGbaedektxbs9mkwMAmFli47W96dTlv+u//c4wLL7mNUPtp5z4YaMDAJhZYuPF1tvtMIw6Tj/tuuK8OU8aHwDAzFDcb85TsfF29t93GobF44/rK590wqVGCAAwM5Rf/7r/Fhtvj8Nw8heffea3YlkaIwDA9Babrnz2Wd/c1c/ZZRgWjz5qoOPNS98fkiQ3TgCAaSpJ8th0se1echhG5XPPvrG05JDvmSgAwPQUW6587lk3vtjPe9EwLCxePNr11vMuSVpK48YKADC9xIaLLVdY/MrRlx2GYfK6hm+6v+OU111mtAAA00tsuNhyu/NzdysMk56erPMd5/+v4kHzNhgvAMD0ENstNlxsub0WhmHHB1G6z3/bHyWtpTFjBgBobLHZYru92AdOXlIYRm3nnP3zjqUnf8SnlAEAGrkKkzw2W2y3PfllexSGyaxZede7Lvx866sW32DiAACNKbZa13/408/HdttnYRgVliwZ6b7o3e/1dXkAAI0nNlpstcJhh43s6a9NX8oNlk45eWP3hReclba3jRg/AEBjiG3WfeH558RWe0m//qXecNt559wz623nvcP1DQEA6i82WWyztvPO/flL/T1echgmHR15x7v+9PrOM079YJKmNcsBAFCnKEzTWmyy2Gax0aY8DMOO6xt2vfc9X+x440kfsyQAAPURWyw22e5er3CfhOHkb3DA/tWuD7z/78unvO4fXMYGAGAKJUkeGyy2WGyyl911e+M+FRYuGp/9wQ9cWn798f/DCgEATFEUnvza/x4bLLbYXvkt83zvneTLHnm0NPDpz3x4+Ec//WjIs9SKAQDsiyhMs85TT/rbeKZwb0XhXg/DyTjc+ERx8IovXDR08/L/mU9UW6wcAMBebMKW4kTnGUv/uuui91yRHnhAda/+3ns7DKO8rz8dvurr52771nevzkZG2y0hAMDLF69TOOvtb3lHx4XvvD7pfXkfNJmyMJxUqSQj373+2IGrrrmx+tSW/S0lAMBLN/mNJhdecFb7W869J5TL+yTg9l0Y7jB+++0HDVzx5c+NPfDQuZYUAGDPtb76ldd3X/SX7yudcsrj+/J29nkYRrXVq9sHr/r6RcPL77gsHx1rs7wAALsRaq2lsY43nfLhrgvfecVL+e7jhgzDKBsYSMeW3XjcwDe//Z3qhicXWGoAgJ0rzt9/ffef/Pu3tp591t1pd3c2Fbc5ZWH4tIl775s9/I1r/+PwbXddkk+Mlyw7AMBz4qylNN7xhhM+0XH+H3+m5Zijt07pbU91GEZ5/9Z07Ac/OGrb/7n+4+OrHz7DFgAACKF02KE3z/qjcz/aevrpK5Ke2dlU335dwvBptbUPtVWuv/Gs4e8v/4xPLgMAzSp+4rjj9KUXl887a1lh8StH63U/6hqGT6vet6K7suymt1d+ctfHBCIA0ExBWD7phEvLZ5/5reLRRw3U+/40RBg+E4h339M7/P0fnDdyx52XCUQAYCYHYfvJJ36k4/TTrisef1xfo9yvhgrDZwJx5crO0VuWLx2582eXja95+PA8ywq2EAAwnSVpWistOXRV+4mv/UjbaUuXF484Yqjh7mMjhuHTsnXrSuMrViwe+dHt7xj79eq/qG7unxvyLLW1AIBpUoNZcW7P5tbXHPaV9j845erS0cesTQ9eNN6wd7eRw/AZlUpSW7u2c+yee48cu+/+M8ZWrvrz6ua+/UKeJ3YcANBYdZXkxbm9m1qPOPyrrUcfeXPrscfcX1i8eGhffY1d84Xhc8QLZWePP95eXbVq0di9K5aOr3n4L6pbtszLtvTPzau1ot0IAExpTBUL1XROz+binDlPlZYc+pXWY45aXjz88EfTgw4amaoLUzdtGP62vK8/rT3ySFd13SPzq4+tXzyxfv2fxR+rGzfNz0dH2/NqVgi1aiHP89QZRgBgz2spyZMkyUKhWEuKaS1paxspHrjfhuLCBWtL8+dfWVi08KHiIQdvKBx88GDS25NN6//V6R6GLwjFoaEkDFfSfKRSqPX1l7Mnn+rN+vrmZIODs7PBbXPzykh3NjbWkVdrLWGi6nubAYDnaymOJsXCRNraOpyU2wfSrlmb066urWlv75Z0/3l9hd6eStJeroWOcpZ0ds6okPr/XEuXuV9+MpkAAAAASUVORK5CYII=",
        name:"NPM",
        color:'red'
    }
    ,
    {
        imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
        name:"VS Code",
        color:'red'
    }
    ,
    {
        imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Repl.it_logo.svg/1200px-Repl.it_logo.svg.png",
        name:"Replit",
        color:'red'
    }
]
//https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png
//https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Repl.it_logo.svg/1200px-Repl.it_logo.svg.png
 


function Skill() {



    return (
        <Box id='skill'>
        <Box  mt='10%' >
            <Heading mb='5%' color='blue' transition='step-start' textAlign='left' as='h2' size='2xl'>Skills</Heading>
            <Heading as='h2' size='xl' color='grey'>Frontend & Backend</Heading>
            <SimpleGrid mt='5%' gap="6" columns={{ base: '2', md: '3', lg: '5' }}>



                {
                    data.map((el) => (
                        
                        <Box _hover={{boxShadow:'skyblue 2px 2px 4px 4px'}} borderRadius={'15px'}   m='auto' boxShadow={`blue 2px 2px 4px 4px`}justifyContent='center' w={{ base: '9rem', md: "14rem", lg: '100%' }} h={{ base: '7rem', md: '10rem', lg: '17vh' }} p={{base:"10px",md:"",lg:"20px"}}gap='1' >
                            <Image m='auto' w={'35%'} src={el.imgURL} alt={el.name} />
                            <Text mt='5px'  fontSize={'20px'}  color='black' fontWeight={'bold'}>{el.name}</Text>
                        </Box>
                      
                    ))
                }


            </SimpleGrid>
            <Heading as='h2' mt='7%' size='xl' color='grey'>Tools</Heading>
            <SimpleGrid mt='5%' gap="6" columns={{ base: '2', md: '3', lg: '5' }}>



                {
                    tools.map((el) => (
                        
                        <Box _hover={{boxShadow:'skyblue 2px 2px 4px 4px'}} borderRadius={'15px'}   m='auto' boxShadow={`blue 2px 2px 4px 4px`}justifyContent='center' w={{ base: '9rem', md: "14rem", lg: '100%' }} h={{ base: '7rem', md: '10rem', lg: '17vh' }} p={{base:"10px",md:"",lg:"20px"}}gap='1' >
                            <Image m='auto' w={'35%'} src={el.imgURL} alt={el.name} />
                            <Text mt='5px'  fontSize={'20px'}  color='black' fontWeight={'bold'}>{el.name}</Text>
                        </Box>
                      
                    ))
                }


            </SimpleGrid>
          

            <Heading as='h2' mt='7%' size='xl' color='grey'>GitHub Calender</Heading>

        </Box>
        </Box>
    )
}
export default Skill