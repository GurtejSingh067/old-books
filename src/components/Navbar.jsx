import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="m-1 p-1 rounded-xl flex justify-between gap-2 bg-[#E8E9EE] shadow-[-3px_4px_3px_rgba(0,0,0,0.25)]">
        <div className="logo">
            <img className="h-10 w-33 rounded-2xl" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAACQCAMAAAB3YPNYAAAAYFBMVEV0m9D///95n9Jxmc+Xs9prlc5nk81sls5tl87Z4vHm7PXy9fr7/P3a4/Hs8Pi+zuewxOLS3e7F1OqfuN3J1+t9odOpv+Di6fSMq9dhj8uRr9nY4vC1yOSkvN+Gp9WUsdoIlBDGAAAI5klEQVR4nO2ZbbeiOg+GwVJaBFQQBN3o/v//8jRJ33DmOWufeVacL7nXmtlSY0mvtmnTFtVBxKaqqFQhYpISvJwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKwSvKz6I7xGk4zaFRprtY5FSmtrXWF4dvbWf7TwWzKhemxekUqG2bu81P8wy8yzuuxvX+B/b7RVO4eta5D7Z6OBMTq3d/otjn/Rn+A1U4Maxu86VKNf46kry3a41ooKrkNblt1pnKkBqm+aM3mut6/ma7KFulE9zXRTiZR9Ns0Y22GHJld/Dc6qa5+ZRdeGpl9je+w4OH05T7fDu2m9Ts6/sm28w4U5nI+uBd1yIcDuBU4JfrX0ffNf+f4J3hr8Ip1mYlc0saj9dj7oKtkMCm3cpwW90xconV3rz9GmfKZR3tK3JNOVuTq7c2J9c90+XWEfh5w+pV+e653hvCSHH/BuMybbC9hadPMc/KJG7yr5gf5PvGUH7Oy6Y3Cu63P+3L0cFBXwGkBQvtQeb/n04OwNuyS06g1vlQYvPH7p33n2Co/6mHuV2ZrrrtZNq0ObF/RuxhnEWxZ+bG/Ykk/h7V7rY4OmT6ZQRLcbxomGy0bcTtPYEB0HM+C1FRQ8ACbiva3rE0ZSZ3JC5eydsn2/wCTtGyjvY/NqetO8c4yYl0MAiXjt4bB+7W3JBxfJxok6YLP01mYcaVQvOuClylRRfhZvrZSZ8Y3KIsObdqG/XuN8PK41rA3oZGuUx0sD/YosEW/l1pf7EgemJ1ROEZFB1fOOkCJAaZSTY360hr5BvM5RVQ8wfOOadUBUz9rVXb+cTasR6tmCw4eBxrrHi/Os0MOn8cIH8Epj1Opmaqiqe/KqCSvGDPDPhvCqF/UEfkV4lQ+ZF2w9jsouTcoduRgI6c1gdsjM1KPc9w3hhW/gtU3oMQOs2sJ6h5vWYGdVfg2uMQ7MAe/iKvDz82/grS28eE3bGZxnbR1qtd849RFvfQAkm29nwgvx9gY1KDA+Qvl+V4AWbYye2NzTJR/lwZ1r1jcJ7yEb6TR4XzGKqxl/uMWaaoglY33xPeg2K6HTP4f3bm2NLGqYziko0lAsr6lSdL6CTuhxVxDXcMJr3FbzFGY0EcIOU/m4VF2ZrWuFhinyNHszZN7es76JeDFEXcLiCQ9DviiqMsV+eJyxIjDbsFexc5flk3i37YwLxrd632/j8y7hgGccvdDcIbqIeKdtm7owtohQbSZoWZY06GnfhS9stR53AUM3NAcSdMR7d2kF7kZCaoGx4TvvPIgNU9YEjEQK8D6gHy8aHIQg/TG8QeP9h+9RZYjJsSzfmLV3XEF6IoRrZhpfFLFTmMWF5mJplkcsM41B7AqCjnjbltyNzTRLuQ/tODjz3sQOeAHeCiuFGof738BbXn6WyES8bSrb7XuPUI8nRAPxklKI/boW6SOGwCU8qFDJbt97jItDYfr/gLcO2YbSn8TbrY/HN756tXqf/av92QAdG1BwwDQ05v+I97KujxuUu0WKRqWztTj7Y4zer2sFxQ4wSyQ9VW39Lgz7Jsc7q93Pq/fgkAfjFBwqa/0osp/Fi9tJaHcDzv1saVtwhTqGwBz2vcoqWu5xb3sFVafS7yXgqGW/rlFMSGY0yjEmNFi6BegUe+0MX6V0+n1pU9j1WSwq0tJWKcqNT3XxYbzwCdbu7k5jOFSIuwPwJ7TmUaaNGQbRxX8XN2Y0G6/1VO7kh+/7upafDpRhXPu0Kgn6Juwc6t1S6Tdm8bFYcQCkpLmG0EQbM+cdhsKH+gt4FeEFSt0h7NK/qHnDb9MK3ASHzUPCi/P5qco34RSgdS3NbfWLGRxXmPNbIfRNwKtsmcUa6syYB7mM7YVehbM+OjChtMJ5B6Fj8JV9dN9rMO6ftE+KY45JOr5cUuz3RCkppsOUsU54jdtAY1I0Q23tKaj0U4DWNYhFIA9yZ+bAIcAyFvpsIO57DfQ5JBK+Ehrfzl9NWfyMY2JU0IIDHv6dTcALwQ0Wws/i3dzGF88X3AaJUsZ2OIcTEhpKx+k8/HKkQ7kmpkhh37thg441/H+o/Qn4Heak253SCVrUaPAM7RXNTkjSQrxt7r6wrsoYLilre+JP6e/F0hwqu2Ya/BkUpZrlMk37Ix1go9YtBPLPb8wgkP56ILkLj92aH0jS3LuZt41ZOSOhGAApUwrnRVndYJYiMS6kpxqZp9Nf9LBSCS+83cVoxOuisql2lV7cW095ARx02oDXxcDib+EN53X/cpz+9XacTiuYC5i7tOKl4c8r+YKp0sMfVUWN9z1Iv/JcyrRiFr5vjhqP07EUj8RcghnOjuyhj1WeVh0jLg2HGwYUqDPbAKXKmPGaofc6v/xow8ugMrtbUfqKJ7Sn8RUvg/qRlr96cp+XWalbqGd6alstziDLUezNWW3Fsr8Muj2cWZ7A2ieYQY2PPFNo+maZzejqpv6/OoOzVVXv75PS7VUV1mC1LVDQ37S/DPrKL5YKOzbN8LMcKunPrjK9dH5D+MvNoMaC311lGp94KB1qUpSN7E/J4BfhtjPI/mIGBda8ZTKUymAVmRX98XaK7l7T6YiCi9f8KvOtTvv24p9ILuJZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZJXhZBXgPIjZV/wCwwXAuJDyT6QAAAABJRU5ErkJggg==" alt="" />
        </div>
        <div className="search h-9.5 p-2 rounded-full flex justify-between bg-[#E9E9F1] shadow-[-3px_4px_3px_rgba(0,0,0,0.25)] sm:w-68 md:w-88">
          <div className="flex gap-2 self-center">
            <img className="size-5 self-center" src="/search.svg" alt="search" />
            <span className="hidden w-auto self-center opacity-30">Search</span>
          </div>
          <img className="hidden size-5 self-center" src="/filter.svg" alt="filter" />
        </div>
        <div className="buttons flex gap-2">
          <button className="w-20 h-9.5 bg-[#EBEBF3] rounded-3xl shadow-[-3px_4px_3px_rgba(0,0,0,0.25)]">Sign In</button>
          <button className="w-20 h-9.5 bg-[#EBEBF3] rounded-3xl shadow-[-3px_4px_3px_rgba(0,0,0,0.25)]">Sign Up</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
