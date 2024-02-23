export const categories = [
  {
    id: 1,
    name: 'Pizzas',
    image:
      'https://github.com/iiKaran/Restaurant-Manager/blob/main/images/pizaa.jpg?raw=true',
    subCat : [
      {
      id:1, 
      name:'Delight', 
      Items:[
        {
          id: 0,
          desc: 'Onion Corn',
          name: 'Double Topping Pizaa (Regular)',
          price: 79,
          image: 'https://img.freepik.com/free-photo/tasty-chicken-pizza-with-mushrooms-spices_114579-10842.jpg?size=626&ext=jpg&uid=R62141179&ga=GA1.1.1565237316.1705398544&semt=ais'
        },
        {
          id: 1,
          desc: 'Onion Corn',
          name: 'Double Topping Pizaa  (Medium)',
          price: 179,
          image: 'https://img.freepik.com/free-photo/tasty-chicken-pizza-with-mushrooms-spices_114579-10842.jpg?size=626&ext=jpg&uid=R62141179&ga=GA1.1.1565237316.1705398544&semt=ais'
        },
        {
          id: 2,
          desc: 'Onion Corn',
          name: 'Double Topping Pizaa (Large)',
          price: 279,
          image: 'https://img.freepik.com/free-photo/tasty-chicken-pizza-with-mushrooms-spices_114579-10842.jpg?size=626&ext=jpg&uid=R62141179&ga=GA1.1.1565237316.1705398544&semt=ais'
        },
        {
          id: 3,
          desc: 'Onion tomato',
          name: 'Double Topping Pizaa (Regular)',
          price: 79,
          image: 'https://img.freepik.com/free-photo/pizza-with-sausages-bell-pepper-tomato-cheese_140725-6772.jpg?t=st=1708668308~exp=1708671908~hmac=c069611c221f06c954f345dc0d1015d4043f0801917d0db1e37a72887e5e0fab&w=996'
        },
        {
          id: 4,
          desc: 'Onion tomato',
          name: 'Double Topping Pizaa(Medium)',
          price: 179,
          image: 'https://img.freepik.com/free-photo/pizza-with-sausages-bell-pepper-tomato-cheese_140725-6772.jpg?t=st=1708668308~exp=1708671908~hmac=c069611c221f06c954f345dc0d1015d4043f0801917d0db1e37a72887e5e0fab&w=996'
        },
        {
          id: 5,
          desc: 'Onion tomato',
          name: 'Classic Cheesy With Tandoori Panner(Regular)',
          price: 79,
          image: 'https://img.freepik.com/free-photo/pizza-with-sausages-bell-pepper-tomato-cheese_140725-6772.jpg?t=st=1708668308~exp=1708671908~hmac=c069611c221f06c954f345dc0d1015d4043f0801917d0db1e37a72887e5e0fab&w=996'
        },
        {
          id: 6,
          desc: 'Onion tomato',
          name: 'Classic Cheesy With Tandoori Panner(Medium)',
          price: 179,
          image: 'https://img.freepik.com/free-photo/pizza-with-sausages-bell-pepper-tomato-cheese_140725-6772.jpg?t=st=1708668308~exp=1708671908~hmac=c069611c221f06c954f345dc0d1015d4043f0801917d0db1e37a72887e5e0fab&w=996'
        },
        {
          id: 7,
          desc: 'Onion tomato',
          name: 'Classic Cheesy With Tandoori Panner(Large)',
          price: 279,
          image: 'https://img.freepik.com/free-photo/pizza-with-sausages-bell-pepper-tomato-cheese_140725-6772.jpg?t=st=1708668308~exp=1708671908~hmac=c069611c221f06c954f345dc0d1015d4043f0801917d0db1e37a72887e5e0fab&w=996'
        },
        
      ]
    },
    {
      id:2, 
      name:'Classics', 
      Items:[
        {
          id: 0,
          desc: 'yellow',
          name: 'Yellow Capinoto (Regular)',
          price: 89,
          image:
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUSEhIWFRUXFRcVFxgXGBcWGRUYFhUXGBcVGhgYHSggGBolGxUYIjEhJSkrLi4uFx8zODMtNyotLisBCgoKDg0OGxAQGy0lICUtLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAgMEBQYHAf/EAD8QAAIBAgQDBgMFBgYCAwEAAAECEQADBBIhMQUGQRMiUWFxgTKRoQdCscHRFCNSYnLwM4KSorLhFXM0Q8IW/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMBBAUABv/EADMRAAEDAgQDBwMEAgMAAAAAAAEAAhEDIQQSMUFRYfATcYGRobHBItHhBRQy8RVSIyRC/9oADAMBAAIRAxEAPwDsVFFeV4NWkUUUUtciiiiuXIooorlyKKKKIrkUUUVErkUUUVMFciiimr2IVRJYCu2Up2islxTn3C2pCN2rD+H4f9X6TWN43z9irqkWj2Q/l0P+o6/KKs0sHVfqI7+pTBReV1fFY+1aE3biIP5mC/iarMRzfgk/+8N/QrP9VBFcRsLcusXJe6ToWhn19da0XD+TcbeUMLLBTsXYJ9Dr9K0mYFsXd8IjRa3+RW8fn/CfdW63mFUf8mB+le2efsK2mS6PZT+DVnMP9muJO9yyD4Sx0/01IX7OMUBpes/Jvxpn7GmRv14KB2PFazD804V9nI9UYfWIqzwuOt3BKOrehFc4fkXHoZUW3/peD/uAqJdfF4c5bqOvhmmDG8TofagOCbqCevJEKVN38XLrlFcxwPNFxCO+3ppHyOlaXBc2qY7Rf8y/p/37Ul2GeOaB2HcNLrU0VGweMt3VzW2DDy6eRHSpNVjbVIRRRRUrkUUUVy5FeV7XlQuRFFe0VMrk3RXlFZ+ZGvaK8oqJXL2ivKK5Qiva8orphSva8orw1BMLkqvCaKbuNXFy4BPComOxaoNTFR+IcUW0hYmuWc1c1uzFVPe+ifq1PpMfWhrVYo0J+p2i0vMPPKWZC6t0H51zvi/Mt6+T2jnL/CNF+VVeGt3MReFq0DcuMdPzYk7AeNdG4HyNZwqm/jP390bIAWQGOi/fPmflWxTw9HDCXa8ftw71YsLNCyHB+B4rFCbdsW7ehN26ciR5dW8oHvW14NwTh1kd9v2i8u5uSLZP8qHSPCZqRjb12+oGSdiE+GD0B9p+lQcPhGdLjuVt3Bok94AnTT0INB+6dUMNEDfijqUwxsvN+A665q/Tj5P7pVS2ikACBlI8Rl7sD3q34XcvXQ1y5cMTCQAAQOsCqjh3LiBUTOzs2rMzTnPUz00nQRUTg3HGw5u5R26pm+DWBIILaaFVME9d6CmQ90lxjr2VV9QBpDWjyWwFm/2AESxPekwSJ2HtUrhOGdUh5GphSwbKJ0EgCqfgfMd3FM7WrRKdM0KARpAb73jt1qRxnHYlUBRBEgnJNyY3EaGKu0qVGn9YkxYDj6aKk7EF4IiATOhWiAioXEXt5ct0KyNpDAEE+EHrVfy/xG9dkXLbKAJBZcnX4Y32p5+Gg21DsZW52kyNTJgHTwNWa1d7mDshGuvLaOd0NMMJlxsqfGcmYK+Jt5rTEaZSY9cjTp8qxHH+U8VgwbmbtLciXQbeBZdco89R510ftJNx7OVmEwfi6evjTnB+Jl0yX9LmxVgASPGPCkU8TTP01YHAjTXe+qt/8rQXAyBEg69c1yjhvG7iOGGZW/imPn5eRmuh8C5lW7CXYV9g33WP/wCTUPmjkO3dU3cKMj7m3MK39P8AAfp6Vi+HXjZuG3cXIQYYPOYe0UVekwj6vAhGA2sLfldlorOcF40sBGaV6Oenk3l51o6yqlM0zBVZ7C0wUUUUUCFFFFFcuRRRRXLkzXteV7WSCjRRRRUyuRRRRUyuRRXlFCXLl7SHNek0xcuVGZEBKWblQMdjAqkmjEYgASTWF5p4+EQtv0RfE+J8hRU2OqODWq3RojU6Ku505hI7oPfO38g8fXwrAWbNy9cW1aUu7GABuTuSfLqSaMRiXuOT8bMfCSSdgB+VdW5N5aXA2O2uib7rLHfIu/Zr8tfE+QFejY1mCpRv7/hOccxgJ/ljg1rhdgs0NdKzcuaf6VnZR/3Umzxtr15X0FoSVHiRrB67UYRTiwVcGScsTsD4/MVKwXKZtYkR3kAzDbw+vhVDNUqyTOvhPPohMApUpD/5QfLkmOC4lmxWVkzTuxnu+QHj51C5tsrh3uLdX9y8EMnxIx/igyBtr0jzrXcT4rh8OMxA7Q/CFAkep6CudnhN+7eFwqG7a6wkMD3iZg9djPtVpuWm3KbkXVSsa1SKrGQNNdY3CsuB8eCKqLdW4YGUDvO0bDIozSPSrjlzALhUe/lhmJIVjqWc95iPuADQL0G9VGP4ficGAyhrcmC6dfIkbe9MYixfAY3WcXHR3tkn42C6ETpuVn1qWuYyS0EHmNPsqbaj3kBzTB4XVqeZLisVXYEhsuk9Zny226GtNy5iGuWSVZmIMd8b6ePWs5hOV7b4NXW4yXzbDGTIJOuvlPpVxylbu28M9pyBdlmVhqCOhif7mpotcHgPNoMRryWpjP27qJ7KxBEyPXuV5h1uNDXRlZTplOhHnWX564u6nsUkAqJ6SZ2n0ipfCeLi3cFrEXQWfvLrMdIPhU7j2Aw9/usy5wI0IzCRpI8NKNk1qDizXeTc/wBjl6yqtLLh8U11US3aNPDuKyvLV1u2VUY6wo3GkHvHz6xtrWr4zw9u66NBzjcwT4AEef4mue4O7et4n9mtugcwM8ZgS07dQoCknroIrcYKzF1LbXWuP2YDAlyjEGWeJgHwHSgosHZljxcm0HTbS+vXFPxtUGvnpmQBeym2eKZHW3cEMxAA6DTx617zBy9axaSQFugdy5AJHgD/ABL5VEvBb10DIW7FoVxtvBmOoyj5zU/h96GbM0FpOU9Auk/KKfh6rqR7J/1NJ14fe/pfks97QAHssRr1wj7LkWKvYi1fNi9IZTBQbHwI6EEag+ddK5bx021tsendJ3/pNL5w4H+1Wu0s5e2Qd09HXcpP4efrWE5d4k4bLcOoO20EH5gin1qM/QYjUFPBbWpzuNV1eionDsV2iA9Rof1qWKx3NLTBVUiDCKKKKhQiiiiulco80i5dVQWYhQNyTAHqTVJj+OC3ba4fhUT6+AHmTp71yzjPG7+MuTdchAe6g+Ffb7x8zWbg8M/EEnQDU/AVwYZ266td5vwKmDiFP9IZh81BFS8Hx3DXf8O/bY+GYA/Iwa4mtoDpPrSgrdNP7+Vav+NpxZx9PaEw4UcV3ua9muMcP47ibGiXWgdD3h6ZToPaK0fD/tCPw37YJ8be/up2+dVKn6dVb/Eg+/klHDuC6FmpLPVBh+asK8ReUE9H7h/3RU08QQiQ6keRB/CqD6b2n6gQhFI8FLuXarsXxFE3YVS8a5iRJAcT6isNxbjJuyqyFPxMdC3kPAU+hhKlXkOKt06IGvkrHmHnbMxWykp1YmM3oOg9aw/FeJtdaW8IAHTxp/FsB/f61VOddBJ6da9DhsNSpj6Amngtf9nPCc944lh3LO2szcI7ug8AZ+VdAxfEO1c2wQSvxAb+n4U1y5woYTBrbMBj37h8XYa+w0HoBUzh2Et3M+H7wNxSzMjBWKkkZw3lpHr51lVKn7muRNtB5qC8Mbni+yjYEm1dZwhKmNJBysOpgySdKvbWMuPJVCsAEEyPiG3n0rI8J5Vu2L1xWuAomZgx1lZ0UkASxHtVjjLy9ijFn7JAYJkQQTr5+Xp707LkJGw+6VWMjN/I/iyhcT4Xee4zgEnUMOuojQVfcs8GRbYLsQ8yk7hspEjxgE1fcv4rtbRJOZlME6d4RKn5HfyqDwe493EO1/KpUns0G4A0nzp7aPZlhBnNpI09deA4rj+oVK9At0DY014AR78lDv3Lj3jaa6t4JEqIHeEEzHrTvG8ILi22MIQ8CSDGb7o8NY+VLsX8FhrjgP3iSWgMwEnxg9TWR5r49iLl4iwg7FHBR1Ukk+JPw7sdIqSzMHZjrtM/lIOIDXNLBYco9NFuOEYS5mOdgUXROsHxHhpVlYw2RnaZLGdgNBsK55wdOJYhcyO2WdZfIJ9BV5awuOUG0wefiW6HBUEjSZ1IEbedNowGzfvue5UqlZ73mWx5DrimeYcFhu0e4ELXJic0QTqayAvOLrXGLFidSTr5a+lbFMNaS1cTEBiSd571zxP9+FVHMtmyuCZlXs0U25IzM57RsgAYzmaRtG3WqzfqP02J0HjoQr+IptqMDHSY38NlkXR7OK7fMwttHf1PZuDpMahTJFbbB8cME2e8coOjs50TvfCCYOseo2qs5ct3cJcS5eUXLJMZzpGYaGDsw6jyNdCw3ErQzEKAo+/CjtNNTpvrpVtjKdRoc50R3+BVIOqNORwn5ULhGIW1hrV9yR2hXPMmO0MCZ10JWTUTjNl3LBzkMNAG5E90+s1X83ceJAtrpaYEMIHe9+lUmE4uSwF0ls8gnePBpPgR7gmqmIexzBTZt5SOXl68Vs4TA1cvb9/Mx7WvPgujcAusbQVoOXQMNmA026eHtWA+0bhXYYpcTbkLdnN4C4u58sw1/wArVpOBcTe3byuDKudADDAk6qfXXzq75i4WuLwty0d2WVPgw1U/P6E1pYWp2tLJP1N6+4+FnVQaGIJOhJ04dGVl+UuKAhT491v1/vzraVxvlbEm3e7Mn4jEHSCPz6V1rAXc1tT1iD7VUxbJYKo7j8LsSzK5SqKTSqoAqsiiivKJcuWc3ZjhgB1uLPpDeHnFZbD2FHn7RXQMVgRdtNbOkjfwI1B+dYvFYe5ZfI4APQ6kMPEUn9OrDIaY1mV6CBKQEJ20/vxNRsQconQneNTNSFXxk+ugprF2pAEx4QPy3NajXAGChcLSoVzFTpGnn+grwuQdf79htSuzafAfX3palR0n11+m1GYGiESdV6hGpGvp+tIuWR4D8KM8AwIHr+lJ7T09h+ZoZKOE2tpRtHsJ+tFw+vv/ANUvJ4t9RTL5NdTpU5iVGUKBiY8qtuROGDEY1QRKWx2jeGnwj3aPkapsSRJgV0H7H8MCmIufzInpALH/AJD5VGKqGnh3OGunmYSqhgLRcxEvZZR1jrH1pzk/i7Cx2DQbtokLr/ipOkHxj8JpjilkO3eOgmB/F5xVJibJwzKezJFycoOoUgdR03rGwjzBy9/RVg0GVKQZvstp/wCQW3dYXVi2VBLsQBmJEW5PxH0qNzP/AINiz2WdLjTdK/d0nWB8M6a9BWSv8CFxkfKL2UhlhjoRBiJ9K6NgLr38Ic1vKdVA/p09tdPatGmQ4EN4Hb5/Kp16HYlryQ4TBvG1pGqof2oWP8AgQAAoMSo2B8qyGN49jf2pc8AXG0K9I2HuYma1OK4HcBFxVUNsVJjMI+Hr1M+1UVrg73Gbt2KMDC5SNBpEH2pNN+RhD9NRPPlqk0qWSqS3+JHqpFjD2sVi8Rbk2wiKW72UglEfOm8rMj26VK5a4XfNwh8pTIXVs2roNGVgNZOmvnPlVVjSGe3dQgsma1cj7yANKmN9cpE+LVNtY3K9u5hnuWyFINs5Siz8YGae6SAREERFXWkOIkW157deKQRlBA1Wm4hxS1hMNksRLIDbAMaESSR0NZ/hPFbzPmuXGmIEba76ddo8aZ4jyU/aW7/RgJBJ7pju+mkfKrDA8q33APaJlJGokiB4exNJxAe5wDBp83+fBaeEOHbSJe4Sdz7bqpx3bN29p7oYjKysqsSbRJLDKNS8rEfrV1hAq2lN45LYt5whIzGJ+6SZJI2mpfM3K9vs8qZgTHfBMkgbHy6+1VPLmFU22F0XLjIxAIdiGWdN4JG49qiqwtfDh15aKsQ17c7D1p4K25fuW71i7duWylkuLiI6wQ3TQkkk9PXavOI4VrynIWGx7vpAG+21Zji/FrzFlVe4NBbUEZTO/m09a2PBsHfuotxnZGCZNiAwGqkqdiD866S4AM0vpqbz89aKatDIwuqnX7Dx7ysHxPgbtcVO2dLupVHHxRqY8dvGrTlvhVvtF/aiQPLaZ+83QfrW8bCL2IOJCM1uTnIiD0I8KoeJ46wqwEeCRBUd1p3AMQNB70NQlkE33g6+MdTKChVxQaadB5jTj5HUe6a4pjVt21tiQUcoA0RBjKSfDUGtdwnFC5bDjY676xtMdNq53zNaUW4DF0fKwPhAYFZ2nQVc8gXybTZMxKkA5j90E9J9Yo8LDKk9RHrZMxNHPhhUIg7+MT6rK864D9n4i5UwGIvL/mJkf6g30roHLd/NbmdCAfyNZj7ZUgYa6BvntmP8rL+DfOpP2f4wtZtz4lY9prTq0wWvYNCJHlKqOOai1x7lt5r2aQDSga8/Krr2ivJorlyoFw9M4zhaXVy3FDD8PMHcGrwWhSsorBAIMhXf3BWBxHJKEylx18j3vroaYHJRn/FPsv5kmui5RXhQVaGNxAEZvZH+7duuef8A8YnV3+n4RSLnKKxpccf6f0robWRTFzDih/e1/wDYprcZK5ji+TmPw3T7j9KpsXy9ctatbLAdVOb5jf6V1u9hqrcRZg1apfqtZtnXCe17X7Lla5D4UXUXoJ9q1nMvA1Km9bGV1EtGmcdZ86yDSR1+dbFCs2q3M1MKqsVb721dL+yO3GEvmN78fK0n61zbEW+8a6h9lf8A8G5/72/4JUfqR/60cwq9b+KmcYtgNnHxIJH40vh+a+47Zckq2hiQrAjODtE++gqFjsI4ut2jyGJgSdQfLwq94Bh1IjXumOpGUmYk+prOw4EZAZO3yFZrEMoh0zz65pOF5VvWri5SrKGBBzZSPGRGunhWmwV63BRHDZWIMdDJkfOqzmLjxsKFtiXOx3yjxpHL+EXD22ulYN5s+Ua5c3QDoOseZrTaabQchgbysatiH4gxU/ltA1705xnBObq3M8IokjxI9Kz+MwQntTcUIdSSTqTqIHStXjOKqFhdWYGAd9N9K5cbFzNqxJUmQRoNdtaTVFMkOB1unU6lRlInLMWi2m6lYnlvEXbk4UwW1MyFI8T4T4HpUvCcMt4cg42+7Pm+ACEnTcKO8NOtS+F8wpbtlCmS7uHWddNiOmgqhwlxcS2e+GTvEMZnQffE9I/OmElrBeb+F9OfrHNPwnZYpxcZDRy+q3oumcP4st9lCLmtlTqR1BA296Ti8UmHXKqAQSQOmo3PvWT5M4kLTsj6Lqyk6abH6AH2Na3iGHS40rHw77z4Qaa4l9MEEZvZKxOHbQrlhBy7c+/msDxTHYi5fti5cz5kZxBcKm0AKnTWPGr3li+tnIrMoN05Sushgd1nVkkgE9JHjWex/D8Th8Qb+Uuo70LrlUbgj7ykfKmuEWTjcZ2ynVQBOU21UEksx1Oe4fHQaVDJcc3UxxQFoylseP4Ws5wwFy8+W3K9xmEDRnA073SsXgeKcQwrdnnug9FPfGnSGkV1K9xPCoAGuqTHTvHw6bGqK/xCzYykE3GOZ+8sNlOgnrE/nTMrhN/XRJNHtWjM0iLDaVE4bzW18G1ikBDQvVCZO/hTPGsXbw2EezZYXCSCA2pUamfT0q3w+Jw+MtG6bALjTJsT7j3qJzFwCzdt2woS1dJICZpLiNB7RQOdnBm5jUTcHY7TyN0WHp1aNUMcfpm4O0b6zwvoqTl9XxSEMua0U1jQ2zvIB8Y/vSnuSCtjEXDmJ+JDJgnUFSR16/Wo1tThMM1vtsp7RW3ImJ7sD8NjFWXBMCLl3tV0Ugsd4cNsw126a7QKVTIBlugnbyWxWMseHaGOr8VK+1Bu04ejiCVvL9VcHWqP7O7mkHSCCPLyq2+1K4LWAtIonPdH+1GP4kVnfs8ujvgzuD6x6+latEkxm4f0sdoHZEjSSurTTgpmaWprzYKSU5RXlFTKGE1XteCisZGiiiiuXLykNS6S9LRBR7oquxVurJ6jXBXKzSdBVPct1zfifCbtl2Att2cnKwEjLuJjb38K6rdt1X3Uq7hMW6iTAmVfY7MuMYy7Da10f7IsVmw+It9VuK/s6x+KGsdzLg8l26sbPI9G1/Orf7J8TkxrWydLtphHiyEMP9uevQYrLVwhI4A+V0msDBWs5geLq90ZjopmI8/Oreza/Z8Pbus+Xu5XBklievr1qPxDDqzEsIK6qRr6+ms1FxWEvYgKq94KIBmJ038PWsfDvBAbuEWIe7sBl26/Pep/B+EXLt4XrlxWtnvRBmB8I8ACPwNad8SrSo1gwfKsBiuOXMKi2EUBkMZujDfURqdd+kVc8A5g7Syxe3Bic0/EJgt5a1ogiIbadefJU/8AHVmUu2cNefqr1cCuc3AAT/YqNiMJbQMSBlMsT+NY7E8TvXrjLbF/LbgkW4QBW1DZiZfTfSp/Bb/dIRnYMAFkggajNK9dJ286a1gMAiPv+UEuF5kaLzi3BhAxFlcyg6qJ26/p71JscDS+CLYyi5Lwd1DE6+oaQfMVNx2OuW7RKLPdiI6nqP086k8PxGXDZ3AzMDqNCAfPpQU3MvTcNp7iOCLs6lNwq0zF4jrw71RYDlJAHOJuhURwO6xXNHiTELV5hXw9wm3ZcOECkANIBHQEVg+K417+Jt23cw2bvfwqmwUfeuMSo9zTvDuGvbVsPdLLic2eyGbs1YtAHeVScpgjeBl2GtPbkLQCBH3JieF/ZHXq1ajsznX9PBX/ADNjHt3WW4rIn3XXxgQCfDxqru8VuYgFXYgKdIETOo1G40prBYq/iHfC37oc20e2VBDAXU1IzkSWG2/Ue2i4LgJRA9uABEqdYHjQ12ZbCb9QfjkmUarcskCR9tR8rIKGR9dDr7kA+PjpWjFpjbS/BtkAKZUgXBnLHKD/AHJrTizbTUKJGu2tYLifGbl63cYhxLtaTx9V8Jn/AG0DaZYLnw6v5eKdiMd24s2I3P2/tTuJ8cFpcuGsnM2kqsLPtuayCY26LpLs2cNrO4IP01qy5Zz2L83HlGyFA4LGZOZSdwdBofKtDwjlexbz4q8S65ibaHaWMif4oJiiMOkGLX5Rx70/BYqlhwc4mfEk6RfT++CreYHS9hbU2wJmGAggqRt5QTp+lW/LOLt27QtgHvKNdNOkaem3Sm+aMl+3YuWybZS4wgAdUO/gCQB7+Ve8ucHa6VkwF02iIPh/e9CC0xeUDy00fqGUSbGbX+FA+2G+qWsJaBIaXaJ6QAZ9yPrUDk3CQV1mYmoP2kcQS9xPsllhZVbXlmOrH5kL6rWj5Tsd9BHi3y2rTaezYSdh8LNaIpid/lbsGlg0ypp2a86kEJeaim6KiUML2va8Fe1kBSivKKKgqUUlqVSGoVITT1HcVIamXFcnNUW4KgX11qxuVCvipbqrlI3WD51wffD9GXKfVf8Ao/Sspy7jxYx1i4dluDMfANKk+gDH5V0rmPB9pYYAar3x7bj3E1zHF2NZjQ16f9OqtqUCx3d14J1QSF2jFXc7kRt9adwGOAAQDY5AB4dDVBy5xE38Ol0GWUdnc8c69T6iG96l47EZMrINTuf4R1MVjMDqVQs306+Fwph7Q3qVG5i4S5uM2UlCZkax7b1FbiAcLhrc5FVu10g6gBEB6gCSfatRw/HdqG10HSN9OlVdng1i7dZrJIKtrGmsaj5Gr1OoG3j0Uuql1PsqtsunlF1nOVeY3sguyMYLW3QR34MZgD4edablXBF3e5HZAszgd0kM/TXQwDr5mncFybaFzOzGCxJA01O5JHWrTiCKqLaIUW1B75aCPD851rQY4OMjjMLLIBOUdfdN3+M2la4jdBIjWfIVG/blvWwqqygkiN9omY6a1jeKY8DErLDs9crLqLh21PlP1q64DxZEdlcgKdZ8I6/KflSADJDtwf6lFiAaFRnA7Kv5g4P+8Qo5tspkPOxBJHz8uoFXlm6Fsvi7+W6CQj5pYp0VVOUFdTI0GpprmnGWFtknvE6ADrOvyqm4HxDtv3N0/uyV7skDRwRP8UeelFSfEA6DrxV0YJ9Sk6qB1vG6OVuWrt5muXHZVzFg4JU3GJ3k66iCfl41tDdYWstsEMh3I0Ov6UX7y4a6tsscjoWUyIOUjux4xVfzLxgBIw9yHBElh3IjVSdxvNOqzJBMbfaPdVKckiBM3H5U7F4eL89sT2ghbZjUxJjz0rBXMfbxjXsMoIZYZOhLKx2HXYD3p3GcQv27lprol/uldVIgHfodqhDhC3cWl23e7GSSwy5oJGgiRmUnQg9OvhH0gkm24KW6qWHK/TY9yt+J4i1aQdsxt5QgVtT32QsoIOsFV0PrV9y7xzPgyjlW/hI21Mgagb1m8cExDmziEBvp3FfIzIQs5SpiYO4Bjfc705j+GMLCqpCDOhLar8GsKvqBrQR2YBHOe7w6smU2ioQ3iRC0TDtu6VU5WJMGCO7pPlJq4wjpg8NdvtEKhf5DQe+gHrUfgWHzW2ui33jpmP3/ABPpWM+1HjcBMBZacpD3uuu6W/b4j/locJmL2kWi6PEHO7sQbTf3KxXC7F27eNxpLMxZjGkkyfqa6ryhYIVnPko9tT+XyrAcu2GWDmknQDTc9B866tw6xktqvUAT5k6n61bxtXLRy/7eyGoLqwU04DTINKBrElIITlFImiuQ5U8KK8XalVkoV5RRRQlciktXppLVCkJtqYuU+1MPXJzFHuVGuipT1HuVyssKhXFrnvM3DOycgDuNLL5eK+34RXRri1Vca4cL1sod91PgRt7dK0MFiOyfJ0OvXL2lW2mQsXyfxc4S/Fw/ubkB/wCU/df2n5Hyrpz4YEeII09/yrj/ABOw0lDoV0IPStFyPziLOXDYlpTZHP8A9fgh/k8+nptqY7CGqO1ZruOWxHh6dyTUBbdq2eCzWpUuAC8jTw+6ahWcUbd6LjQGcZQNMx1MiPSr/E4UNrAPUedZHi2EbOrKAMsx5eUf3tWbRcHWd1zT6BbVJ56rXjH66aE7GRE1gOa3ftmliwJ66j5Ve23taG4xBHrAJO9V+I4agvdmzXGU98OZIg/dnoKsUKhDvq8k/Btbh6snhwUHBImIQW7uVMpBUwB8I7225I+tWFnhVtdQ06QZ6Vb4UYfIyoqgpv5+9VXDcNmBxDNkQk5kYE5tYGXwqy55IGU6dQqmPp08QHEjLGk8fz4qPxGyWcp2ZKju550PgRVRh8BcFzKuvp1/uK0PC+1S6wc9pZYfuyNcpn4WOkRUpMYFchMoggaRrPUUT3BpPAp+BxjmU8rSHW169lVcSxZBBxDFmRQEkFonYCPiJMba1OtYPD2rTu8923LSwYG9G0EaMSY009KZ5ivIWVVI7ZHFxVK5gY6HpsZ9hURuJpkAYFWMsT2ZgMdzqTJjw8aMOLoPpx4a3jeZVJ4k3tOmw9FaYLDTKR8L22WZIGYDMBPSJ6+FSONWMOcy6C4iliF9JnSs7xXi5Nnsl7QfvRcV8wWQFKxAE9R16VH4bcYsG38Z6+MmpBy04P8ASuU/03tAXmw258+4laXhAuOEfuXVVgMx+JTv7jT0oxeDbGYp0KwGELvoB18p/SpmH4WtmwOylSxzZTvvMTvHnU+3xBcFhnxWKYDLoAu7T8KLO7E/nQAOc8U2qkwswoc+nvYCdO4e695k41b4VgQFIzkZLCGTLR8R6lRMk+g6iuO4V2u3C7nMzEszEaknUk0zxjit7H4lsRd66KgkrbT7qr+Z6mTV9y9wprjKsQTufAdTWuGNptvoNSq9Jpbc6laflXhilhdjRdF/q8fb8a2VuomDsKihFEACBUsV5/E1zVfPl3I3J0GlA00DXoNIlKLU5NFeZq8rlEKWu1e0i2aXWYkmyKKKKFcvKQ1KNINQUQSTTD081MtXJrUy9R3FSHph65WGqM9MXBUm4KYemNVpizXMnBO1Be3/AIgEf1jw9awmJwYGkHN/D+M+ddaYVR8c4ILvfSFuePRvI+fnWxgsbkhjjbZMIlUXKnON3CRavDPZ6CZe3/T4r/L8vCt3aNrEp21pgysNCPqCOh8jXIuIYZg5RwVYdDp7+dP8E49cwhKiWRtWWY12zKeh/GruLwArDtKdneh/PRSA3K6RZdFu8JYGIlTqfDyFRLnEXS7lyMVXcmQKncB41h8UgW1d/eASUfRvPTr6iatrmEBHeE1kF7mOy1G+B9+rKwMSDZ91Q4bFpLlCCYBb3J/SkLxmzBUmANCIOUEjbQbTVmeDIrFhppFVd/l2WYpufpTWOpF1526KZNF+6Th8VbW7CXBlYSV+KfLoCfClrbs9qFtQDmGYEn4SNQpP4bg1ScR4AbSKdZUyZ6666U6i9pbAKlTsSB5T7irwLQLGRz2VJ/6eR9eHMH0KsxgraYm7dVXyr3RnkgtAzETqRrTeM4q92URAoj+EnN032FPcNvFR2LW2usRMnYDzmpNnh90uWLQrCMuwH/VBUqjMXeXXBWKbC1o7aJtv18LPlGYREiJj086teBcJuuozWYHxSTGoIjTfx+VX1vhdi2M9xwBv3jA95qg41z7ZtqUwi9q38Rlba/m/tp50dOm99gPLqyKrjTlyU1e8Uxq4Vf2jEXsuX4QoDO56IoO/4Dc+Ncn5m5gvcQvBnOVAf3dsGQv82m7HqfypOPxV3FXDcvOWbbwAHgo2UVa8B4MXb92snqx+FPU+PlvWlRpMoNzHXcrPIkydU1wPhBzCASx2H5nwFdL4Nw8WUjdjqx8T+lI4TwtLK6asd2O5/QeVWiisvGY3tfpbp7/jgiAhOpTlMqacBqhKWUsGvZpNeA1KGE7NeUiiolDlU+2aXTdqnaz4Vc6ryiiihKheGkGlkUhqFEEhqYen2pl6gJrUy1MuKfamXFEntUZxUdxUpxTDrUhWGFMmmmFPEU2RTQU8FVfFeF276w41GxHxD0P5Vh+L8vXbMkDtF8QJI9V3+VdJYUy6Vfw2NfRtqOHWiItDlxx0O85Y1HT5VdcK50xuHgdp2yfw3e9p5P8AEPma2XFOX7N7V01/iXQ/Tf3rL4vktgZtXJ8mEfUfpWy3G4au2Kg8x8qu+i7ZaXAfaVh3EX7T2j4j94v0g/SrRObMBuMTbHrK/wDIVzPE8AvrvbJ/pg/hUC5w5xvbcf5T+lB/j8K+7HR3EH3v6oMrmrrr8c4fdHexFg+TXEH0Jpf/AJXAKJOJsR/7E/I1x0YNj91vkaWnCrh2tsf8p/Eip/xtNv8A68wPwpBft7rpuO58wVvS1mun+VSB/qaPpNZvjX2iYi6MtlFs+LaO59yIHyNUNngN9trZ+lW2B5LvtOYKgjQ7mfTwp0YWlqR5z6fhCKbjqqC7fuXCDeuO5me82aJ9dh5VPweBe5pbUsfAa/PoPU1sOG8iWVIN0m4fD4V+Q1+tarC4JLahUUKBsAIH0pFb9Tpi1MT6DryRZIWQ4RybMNfMD+BT+Lfp862mEwqW1CqoUDYAQBTwFKFZVbE1Kv8AI+Gy6ANEoUqaQKXSkCUDSgaQDShUoSE6DRNNg17NTKGE5RSJorrqIVjap2iis9U3ar2vKKKgqAg029FFCiCbam2ooqE1qaamnooqU1qZcUy4ooqVYamitIK17RUhNBTZSvDbooo5RglJNmk/swr2iizFTmKQcCppP/jVooow53FRnKBwxPCnUwFsfdFFFSHHioLin0sKNgKXFFFShQDSpooqUJSga9mvaKIKF7NezRRRIUsUqiiuQomlUUVKhFFFFTCFf//Z',
        },
        {
          id: 1,
          desc: 'farm',
          name: 'Farm Fresh (Regular)',
          price: 89,
          image:
            'https://media.istockphoto.com/id/1048400936/photo/whole-italian-pizza-on-wooden-table-with-ingredients.jpg?s=612x612&w=0&k=20&c=_1GwSXSjFeC06w3MziyeqRk5Lx-FMXUZzCpxEOoHyzQ=',
        },
        {
          id: 2,
          desc: 'farm',
          name: 'Farm Fresh (Medium)',
          price: 179,
          image:
            'https://media.istockphoto.com/id/1048400936/photo/whole-italian-pizza-on-wooden-table-with-ingredients.jpg?s=612x612&w=0&k=20&c=_1GwSXSjFeC06w3MziyeqRk5Lx-FMXUZzCpxEOoHyzQ=',
        },
        {
          id: 3,
          desc: 'farm',
          name: 'Farm Fresh (Large)',
          price: 289,
          image:
            'https://media.istockphoto.com/id/1048400936/photo/whole-italian-pizza-on-wooden-table-with-ingredients.jpg?s=612x612&w=0&k=20&c=_1GwSXSjFeC06w3MziyeqRk5Lx-FMXUZzCpxEOoHyzQ=',
        }, 
        {
          id: 4,
          desc: 'marg',
          name: 'Margherita (Regular)',
          price: 89,
          image:
            'https://media.istockphoto.com/id/905492462/photo/pizza-margarita-with-mozzarella-cheese-basil-and-tomato-template-for-your-design-and-menu-of.jpg?s=612x612&w=0&k=20&c=J4L7If3oJp0IrZ5IXEc-_r0WU0HNa7U5Yn4IW7ynuVo=',
        },
        {
          id:5,
          desc: 'marg',
          name: 'Margherita (Medium)',
          price: 89,
          image:'https://media.istockphoto.com/id/905492462/photo/pizza-margarita-with-mozzarella-cheese-basil-and-tomato-template-for-your-design-and-menu-of.jpg?s=612x612&w=0&k=20&c=J4L7If3oJp0IrZ5IXEc-_r0WU0HNa7U5Yn4IW7ynuVo=',
        },
        {
          id: 6,
          desc: 'Tandoori Panner Pizaa',
          name: 'Margherita (Large)',
          price: 70,
          image:
            'https://media.istockphoto.com/id/905492462/photo/pizza-margarita-with-mozzarella-cheese-basil-and-tomato-template-for-your-design-and-menu-of.jpg?s=612x612&w=0&k=20&c=J4L7If3oJp0IrZ5IXEc-_r0WU0HNa7U5Yn4IW7ynuVo=',
        }
      ]
    }, 
    {
      id:3 , 
      name:'Premium', 
      Items:[
        {
          id: 0,
          desc: 'Tandoori Panner classic ',
          name: 'Red Indian Pizaa (Regular)',
          price: 99,
          image:
            'https://img.freepik.com/free-photo/top-view-pizza-with-chopped-vegetables-mushrooms-sausages-sliced_140725-12435.jpg?t=st=1708669298~exp=1708672898~hmac=abff485d46b9239ac8d3679b92a90e8809501b168d0b896bbe94aa2d8cb9d434&w=1060',
        }, 
        {
          id: 1,
          desc: 'Tandoori Panner classic ',
          name: 'Red Indian Pizaa (Medium)',
          price: 199,
          image:
            'https://img.freepik.com/free-photo/top-view-pizza-with-chopped-vegetables-mushrooms-sausages-sliced_140725-12435.jpg?t=st=1708669298~exp=1708672898~hmac=abff485d46b9239ac8d3679b92a90e8809501b168d0b896bbe94aa2d8cb9d434&w=1060',
        }, 
        {
          id: 2,
          desc: 'Tandoori Panner classic ',
          name: 'Red Indian Pizaa (Large)',
          price: 289,
          image:
            'https://img.freepik.com/free-photo/top-view-pizza-with-chopped-vegetables-mushrooms-sausages-sliced_140725-12435.jpg?t=st=1708669298~exp=1708672898~hmac=abff485d46b9239ac8d3679b92a90e8809501b168d0b896bbe94aa2d8cb9d434&w=1060',
        }, 
        {
          id: 3,
          desc: 'Spicy Panner Pizaa',
          name: 'Spicy Panner Pizaa (Regular)',
          price: 199,
          image:'https://img.freepik.com/free-photo/pizza-polo-funghi-table_140725-5398.jpg?t=st=1708669747~exp=1708673347~hmac=ae407e6a2ae846e3694e2ae4bcbd6c615f5fadbcc1db764c4814f881a7112ea9&w=1380',
        }, 
        {
          id: 4,
          desc: 'Spicy Panner Pizaa',
          name: 'Spicy Panner Pizaa (Medium)',
          price: 199,
          image:
            'https://img.freepik.com/free-photo/pizza-polo-funghi-table_140725-5398.jpg?t=st=1708669747~exp=1708673347~hmac=ae407e6a2ae846e3694e2ae4bcbd6c615f5fadbcc1db764c4814f881a7112ea9&w=1380',
        },
        {
          id: 5,
          desc: 'Spicy Panner Pizaa',
          name: 'Spicy Panner Pizaa (Large)',
          price: 299,
          image:
            'https://img.freepik.com/free-photo/pizza-polo-funghi-table_140725-5398.jpg?t=st=1708669747~exp=1708673347~hmac=ae407e6a2ae846e3694e2ae4bcbd6c615f5fadbcc1db764c4814f881a7112ea9&w=1380',
        },
      ]
    }, 
    {
      id:4, 
      name:'Supreme', 
      Items:[
        {
          id: 0,
          desc: 'Tandoori Panner classic',
          name: 'Punjab Express',
          price: 109,
          image:
            'https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg',
        }, 
        {
          id: 1,
          desc: 'Tandoori Panner sigha',
          name: 'Tandoori Express',
          price: 209,
          image:
            'https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg',
        }
      ]
    }
  ]
  },
  {
    id: 2,
    name: 'Burgers',
    image:
      'https://github.com/iiKaran/Restaurant-Manager/blob/main/images/Burger.jpg?raw=true',
  },

  {
    id: 3,
    name: 'chinese',
    image:
      'https://img.freepik.com/free-vector/hand-drawn-american-cuisine-illustration_23-2149330341.jpg?w=1060&t=st=1708024837~exp=1708025437~hmac=fcec5f046d70f9251f5324048db85cecdaf01d7edd131fd07ed2997c0eaf6a47',
  },
  {
    id: 4,
    name: 'combos',
    image:
      'https://github.com/iiKaran/Restaurant-Manager/blob/main/images/food.jpg?raw=true',
  },
];

export const MenuItems = [
  // Pizzas:[
  [
    {
      id: 0,
      desc: 'Tandoori Panner Pizaa',
      name: 'Pizaa Name',
      price: 70,
      image:
        'https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg',
    },
    {
      id: 1,
      desc: 'Tandoori Panner Pizaa',
      name: 'Pizaa Name',
      price: 70,
      image:
        'https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg',
    },
    {
      id: 2,
      desc: 'Tandoori Panner Pizaa',
      name: 'Pizaa Name',
      price: 70,
      image:
        'https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg',
    },
    {
      id: 3,
      desc: 'Tandoori Panner Pizaa',
      name: 'Pizaa Name',
      price: 70,
      image:
        'https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg',
    },
    {
      id: 4,
      desc: 'Tandoori Panner Pizaa',
      name: 'Pizaa Name',
      price: 70,
      image:
        'https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg',
    },
    {
      id: 5,
      desc: 'Tandoori Panner Pizaa',
      name: 'Pizaa Name',
      price: 70,
      image:
        'https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg',
    },
    {
      id: 6,
      desc: 'Tandoori Panner Pizaa',
      name: 'Pizaa Name',
      price: 70,
      image:
        'https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg',
    },
  ],
  // burgers
   [
    {
      id: 7,
      desc: 'burger',
      name: 'Pizaa',
      price: 70,
      image: 'https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg',
    },
    {
      id: 8,
      desc: 'burger',
      name: 'Pizaa',
      price: 70,
      image: 'https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg',
    }],
  [
    // chinnese
    {
      id: 9,
      desc: 'Pizaa burger CHinese dish',
      name: 'White Sauce Pasta',
      price: 150,
      image:
        'https://img.freepik.com/free-photo/top-view-tasty-penne-pasta-bowl-red-onions-garlic-quail-eggs-tomatoes-table_140725-148482.jpg?size=626&ext=jpg&uid=R62141179&ga=GA1.1.1565237316.1705398544&semt=ais',
    },
    {
      id:10,
      desc: 'Pizaa burger CHinese dish',
      name: 'Red Sauce Pasta',
      price: 150,
      image:
        'https://img.freepik.com/premium-photo/tasty-appetizing-classic-italian-pasta-with-delicious-sauce_550617-6564.jpg?w=1800',
    },
  ],
  [
    // combo
    {
      id: 1,
      desc: 'Capsicum Pizaa Combo',
      name: 'Capsicumm pizaa,white sauce pasta, 250ml Coke',
      price: 159,
      image:
        '',
    },
    // https://b.zmtcdn.com/data/pictures/chains/0/123910/514f9e0d4bcc46f4794800a6d99f43f0_featured_v2.jpg?output-format=webp

    {
      id: 2,
      desc: 'Sweet Corn Pizaa Combo',
      name: 'Sweet Corn Pizaa ,red sauce pasta, 250ml Coke',
      price: 159,
      image:
        'https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg',
    },
    {
      id: 3,
      desc: 'Tomato Pizaa Combo',
      name: 'Tomato pizaa,white sauce pasta, 250ml Coke',
      price: 159,
      image:
        'https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg',
    },
    {
      id: 4,
      desc: 'Onion Pizaa Combo',
      name: 'Onion pizaa,red sauce pasta, 250ml Coke',
      price: 159,
      image:
        'https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg',
    },
    {
      id: 5,
      desc: 'Stuff Garlic Bread & Onion Pizaa Combo',
      name: 'Onion pizaa,Stuff garlic bread, 250ml Coke',
      price: 179,
      image:
        'https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg',
    },
    {
      id: 6,
      desc: 'Stuff Garlic Bread & Capsicum Pizaa Combo',
      name: 'Capsicum pizaa,Stuff garlic bread, 250ml Coke',
      price: 179,
      image:
        'https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg',
    },
    {
      id: 7,
      desc: 'Stuff Garlic Bread & Tomato Pizaa Combo',
      name: 'Tomato pizaa,Stuff garlic bread, 250ml Coke',
      price: 179,
      image:
        'https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg',
    }, 
    {
      id: 8,
      desc: 'Stuff Garlic Bread & Sweet Corn Pizaa Combo',
      name: 'Sweet Corn pizaa,Stuff garlic bread, 250ml Coke',
      price: 179,
      image:
        'https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg',
    },
    {
      id: 9,
      desc: 'Allo Tikki Burger & White Souce pasta',
      name: 'Allo Tikki Burger , White Souce pasta, 250ml Coke',
      price: 149,
      image:
        'https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg',
    },
    {
      id: 10,
      desc: 'Allo Tikki Burger & red Souce pasta',
      name: 'Allo Tikki Burger , red Souce pasta, 250ml Coke',
      price: 149,
      image:
        'https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg',
    }
  ],
];
