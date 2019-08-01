import { trip } from '../Interfaces';

export const complexData: trip = {
  userId: '5d40fd7d1ba8db20b5315258',
  origin: 'LAX',
  roundTrip: true,
  numAdults: 1,
  flightClass: 'economy',
  directFlights: false,
  destinations: [
    {
      location: 'BCN',
      numDays: 3
    },
    {
      location: 'PEK',
      numDays: 4
    },
    {
      location: 'JFK',
      numDays: 4
    },
    {
      location: 'LHR',
      numDays: 10
    }
  ],
  flights: [
    {
      fromAirport: 'LAX',
      toAirport: 'BCN',
      departureTime: 1565406000,
      price: 319,
      deepLink:
        'https://www.kiwi.com/deep?from=LAX&to=BCN&departure=09-08-2019&flightsId=243e01af46c50000aae26c70_0&price=288&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzzjM4Zr8o2Zm6+6omMjf4UKZSMp+SmW7sMx7a15NLF1cQQVOncgMJYrTozZdt9lncpDcw9LBF/14xokOWbpQefaE0MThdFH2bauVbUl3z+EPu757b+bdn7U88x0oeTDSeTQgJ+6Qo07oDfisxssX49ITlzCZE+sl3G1Znufs4Eqt0IdR1IdVHZEkZy9v+v3xZ7gRfK7VMQ0pIIzKos8XrSw0+/MmjkIuuJXxrQdOm5GFx/90Mji4t12lJRDO9XHpfT+j0YjIXsvj61lp/cwlH1/tUAfscvHcdZPbxeq9h8cGrbpFdK54eM3aF8KJDNykSdV/0mbKonmnlfO0GgIq2SOhKpexN35uhK4DjtuoyXfoAegGyXcW01pgC3qGyJT/SY9FO8Rfpwt9i7T4uoTjkClcgOn1DDYawPTPsNFiDBLFKIBUsyoUFfGmcoe5dhIM9cWJbYAUudpefNHq9VLFmxj6AVwq1rtFrZOy4AW1EjosRc8aq/t8srsrBtPgKSFJTiCz3rucX60YMmVpe+aL1+tKWjqDRA/5i8YNJsvO2BjC039Ddlr8Wpc1ZuyW4B2k06KtJlMuFfLC/tlV/NKpKwuKUKdb79kKMgiMJ9gcq9NjNVWFJpfOYCn1/enb6oVBvmL1c/5d8J4WWRQS8khBaT2vEWJK83u6lMqLrJTlevihMEw/jkQERqJ92zsLak87tMIjYAF6TfYUGJMwjt8qCdjrGP5dAsy9bnpWbBjoDncyIYL+p79gNZgtBhHKDrUmZtYS3CjGoQFchg2u2OZviGNHOD7kB3PAF5pcwN3Bt0AQ=',
      routes: [
        {
          fromAirport: 'LAX',
          toAirport: 'BCN',
          departureTime: 1565406000,
          arrivalTime: 1565445300,
          airline: 'DY',
          flightNumber: 7110,
          latLngFrom: [33.9425, -118.40806],
          latLngTo: [41.296944, 2.078333]
        }
      ],
      arrivalTime: 1565445300
    },
    {
      fromAirport: 'BCN',
      toAirport: 'PEK',
      departureTime: 1565582400,
      price: 529,
      deepLink:
        'https://www.kiwi.com/deep?from=BCN&to=PEK&departure=12-08-2019&flightsId=01af18c546c8000041e65255_0%7C18c50ddc46c9000002b65533_0%7C18c50ddc46c9000002b65533_1&price=478&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauznXrjUU5DO5yEyzjl6MDqTkFnOJd+Yg9dLRRtNpErYBi+7fg229OAhP+wSGVWqpXFvH43ZAdEDk+rQfttunb3Pl3k9Z+pySs1mvyI5jbe2IcK4SJ/wTNZ0NBA0ApGWdwz/GC6xknuI/2XMW5L3Zigk+x71P/e9EW9W4TbS3hZN3PeRihGxRUbYDSLK3guL5GK4hLGa2UcSAIrdC62ZacIRx918eBSPRqymPLOFF7uUEk5uouxn1cHMPktFZxwmVqpJSVqJNmqBXXhFH2SxX/OLvd29m5LFQ4ASj02ecmRI+jt9WQpPcdaJLHQ7GL3TZzAqnqkQdSdxa+gGwhcqxeAju5Btx9lgvi8etERFRdrKtQgGTIDpu0kHkzzlrSlVh0sPaNIlAffVeUvadR1PVCY5r5AqgQrzeilvVJy9zHdTnC3L8lRvJ/aqYaPDlPSJAXtDr/jyQ08xr55QpoWCVlsGfriMCzyu+ONWd2yzfxHuJQmw0CtI6X7r5DHTnlWdsEpMx2ZbRI9k2gw8PUkp90KG8BM0JOandiMCXx1792ln5Im62IKD764GZXnFvGpQI3HFaZQy3QpiDkQ/cKLj3bPqHPV9HsF6DH0L+rrY2JvLShbWFAd24rWKY3T4tJVvlG66uyDvwstkFdKOQq5wtVy0Up4Gc4IckD9Arn9Jo9l1odjQv7rpxp+Y0W8sYV47LM9ydMsAcCCIoR26MSn8z+3zQPilJRhFsUSz6Uzmh+6xM7DEjyOfo668JPDIq2eHYFsCI3T6/PLc4oEFkAICo/KzcVMWjLup3nNW+rOih56EPgNIZgtqyi39HDByH7QZY35mQf4VUYcKCKaWAhnS7pp6jfga14LEC0zJgQhTo0soqeL26R6J9FAaWFUp6L9eCzNeMdRJf/SR1fk9nzvLgAL76fJXmKnks9FIM8Q3N8VF76lipL3U2hn3qZqqHD+7bK3D6AA+mWCXv5yCZzBWhcJBe99OW9Lb/nkxBXh29sl9rBeGk0wNH+QbSs8eJ9JQMwM',
      routes: [
        {
          fromAirport: 'BCN',
          toAirport: 'BLQ',
          departureTime: 1565582400,
          arrivalTime: 1565588400,
          airline: 'VY',
          flightNumber: 6526,
          latLngFrom: [41.296944, 2.078333],
          latLngTo: [44.530833, 11.296944]
        },
        {
          fromAirport: 'BLQ',
          toAirport: 'SVO',
          departureTime: 1565647500,
          arrivalTime: 1565659500,
          airline: 'SU',
          flightNumber: 2429,
          latLngFrom: [44.530833, 11.296944],
          latLngTo: [55.972778, 37.414722]
        },
        {
          fromAirport: 'SVO',
          toAirport: 'PEK',
          departureTime: 1565688600,
          arrivalTime: 1565715600,
          airline: 'SU',
          flightNumber: 200,
          latLngFrom: [55.972778, 37.414722],
          latLngTo: [40.08, 116.584444]
        }
      ],
      arrivalTime: 1565715600
    },
    {
      fromAirport: 'PEK',
      toAirport: 'JFK',
      departureTime: 1565931300,
      price: 965,
      deepLink:
        'https://www.kiwi.com/deep?from=PEK&to=JFK&departure=16-08-2019&flightsId=0ddc243e46cc0000a34d99bd_0%7C0ddc243e46cc0000a34d99bd_1%7C243e20a146cd0000882a7206_0&price=872&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzZp8lSE66wNXq8dL0XR7Kcid0nRGbmhWOhqJKebWTLog9NIYh3yUuRsxolVEHHgMS7wXFzuE3mXU+D2jJKy43g98R4hn2P2dI2hqZtaDC/4T1kkBli6LE4slUSzOFm81wccbevnWC766WTOixtJtS7nfJT4Q67thG7z+NvoS/0fRItsXX3P1Rgg8HCjn/hnvrhIZJyX8Jj1VLE/Ym6FIELDQQp99A5zYQVSLretHSH1fHdMMXF7fAI7WmLnPvQyhLneMduukFf5UFIpozMCN4HD3jqla1bxn30YKaqFxAnWd+1BIkIj1Ifo7R1Kd3D76yq/eKKhOxulfdO0EVOP2LZRF6LbEQZFmYSX1xvGCz5uRx/eKC3iryLplH/T4PJzXN+ZgXmGCJ5S4VR2vnGjfLEb6199vM5HVCCRE9jfkdV8NGMHsVh7KkKF80XTpITQ7rIayAmm8BDL8/Y1dkSaubIIYuZY7NvQQt008gFBxXJqDLJb9zR2VwkGEmoBSST+7wxGIkYWq0FWz52yf/SKqlHMKB3mP0036Raj5Y1OJj2zBZiliz/oQalfbms89SaBnMT2xtkEPh3RTBgrM8TYzEfubwHbf/IdGk9UOmwUBXVl0baD2vHQF91bP3VWp1gAwSa/fUPkERc6MkLDo/m+Bu64Z0gN8lFQ/pbHfxMJ7IH4CZyGmgUMJZK8Mfwfx35TzHfmP4BZXeQcY3L/mr8obZnJCOajjbXUb7yi6r7oLOX2JGWMkJh7L+NQaiuFTobesP8QJywa+JnJBEtc7tyeDniVP+PHtvBzhNxaKYO1sR8M95qYcqehLqOLG68tPX0jzZYr0pU+JA/KZu4JfPx4XmTID8rf/MCNZc+uL3oTYXSRCdPSovn1JtcWn9m7s/uhzo68XsyR4FGjBMmLzggm2TP8pL+rx1EyS6OnoT7f8rIb0Sakuj6bxa5dvhfpoh5c7W6RpWfmqPEwB0D4D+2Sk3fA==',
      routes: [
        {
          fromAirport: 'PEK',
          toAirport: 'MNL',
          departureTime: 1565931300,
          arrivalTime: 1565949300,
          airline: 'PR',
          flightNumber: 359,
          latLngFrom: [40.08, 116.584444],
          latLngTo: [14.508611, 121.019444]
        },
        {
          fromAirport: 'MNL',
          toAirport: 'LAX',
          departureTime: 1565960700,
          arrivalTime: 1566009000,
          airline: 'PR',
          flightNumber: 102,
          latLngFrom: [14.508611, 121.019444],
          latLngTo: [33.9425, -118.40806]
        },
        {
          fromAirport: 'LAX',
          toAirport: 'JFK',
          departureTime: 1566045000,
          arrivalTime: 1566064980,
          airline: 'B6',
          flightNumber: 24,
          latLngFrom: [33.9425, -118.40806],
          latLngTo: [40.639722, -73.778889]
        }
      ],
      arrivalTime: 1566064980
    },
    {
      fromAirport: 'JFK',
      toAirport: 'LHR',
      departureTime: 1566353100,
      price: 405,
      deepLink:
        'https://www.kiwi.com/deep?from=JFK&to=LHR&departure=20-08-2019&flightsId=20a11cce46d0000005521ef5_0%7C1cce0f6446d200000254ea60_0%7C1cce0f6446d200000254ea60_1&price=365&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzLqJAE1rgmQGAx9HdmlHodmDSws4+HRi+r4m1WsIIaUQqTnr0OQd0O71Xn0lQIp3WsIbUy0srkyG3nBp8UM+SUuB86IZTSmjlxLd3NfcI06tVhU/ol/W/gS5Lm8GuOAW/qnFxyhYjfUvrQaZukyTsQUyEQ8bZzcvegml+DLEF3EJgFrgrLTG5WxWWhy8U003KyBwsZ/vak/7aEfqT72V9ZsV64DLDFGBBk5JJK0s6DhAfoctltAlD1plFi4aHRoTDmL0nnmSciuFjklFNrl0pQMiRCCtYaF0iWOh+mvkOjSM0pRhRCXHXY5re8juX781jBl64W0zsEgFwT6l10OhVNm13X79gVf/tIfpLM2CsIEyMBZzkJWKV3wFPOeGqPepmNrbhYPzzIS5XSiOvbXdN6Gmkcg1gIuNLz+ijpCJKyioUbviTzah+xKhL4IAPhuZORsaHwNGJ49+b1BoeoqR/bgYVupFGfi9HvOWlhR53kiW99DR8x/UC/LAZA2EUcE3m81kU1lPK8TXgL/jaQpLsCI3AW8GvqWeyDTBcL4qEIN6ePJA5wROqiSOzt5YgSJweDvqeuhKATBq30YgJLgeAPhsvO4WFu0ngZgmWxlPn8rR/NkhCjY7mZVooOo7QiHqys7MSa/9DxTsePPhPEbN1XR9YfivtU42p4/VFwBzSQpex/ASYkm2+gA9Dy5Kr7NNVV00qSo1TG6dj8qntHfFOp9bGF2hd9lJ23JDXtNw9w3fUgq0KCr9Mz5pEk6t/3YJqQOyBfoKFgQf6S0ptOCziN/Kn7Zsene+OMKQNgQmNNbtbtHHV/32CZR2lI66MDiNu+XbSwz88VLItJg5jpiqaBzQ65o60AQqdNtdAhpNKryA2VqM1k2z6LjcmH/q29uVa/3h+QF/0PvRgGZsvhcCZJ7f7vsVugdCzGoq5MAAF+7wIvU2Cad2I+bNTYRia/hgK',
      routes: [
        {
          fromAirport: 'JFK',
          toAirport: 'OSL',
          departureTime: 1566353100,
          arrivalTime: 1566379500,
          airline: 'DY',
          flightNumber: 7002,
          latLngFrom: [40.639722, -73.778889],
          latLngTo: [60.193889, 11.100278]
        },
        {
          fromAirport: 'OSL',
          toAirport: 'BRU',
          departureTime: 1566449100,
          arrivalTime: 1566456600,
          airline: 'SN',
          flightNumber: 2288,
          latLngFrom: [60.193889, 11.100278],
          latLngTo: [50.901389, 4.484444]
        },
        {
          fromAirport: 'BRU',
          toAirport: 'LHR',
          departureTime: 1566501900,
          arrivalTime: 1566506100,
          airline: 'SN',
          flightNumber: 2103,
          latLngFrom: [50.901389, 4.484444],
          latLngTo: [51.4775, -0.461389]
        }
      ],
      arrivalTime: 1566506100
    },
    {
      fromAirport: 'LHR',
      toAirport: 'LAX',
      departureTime: 1567144500,
      price: 343,
      deepLink:
        'https://www.kiwi.com/deep?from=LHR&to=LAX&departure=30-08-2019&flightsId=0f6407bb46da0000b3d79220_0%7C07bb243e46da0000abe62c80_0&price=309&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzx3DkAmIsqZYyfhVzPDJsew1WjMOOIGZR0Bux2yYVv4DJLXlePtV3DNjXSTbK0ytJTr74DlzjDzfOOqKXepU8eFlNQj+L90jtyk7RyJ1r+NBiZxKAzeTl63F2OX4UXNrVhyvAzgJjAbCHHbp1kD0pVNCTwu3Wk8pJ84l6pCCDyyrAJEPHR64UOsKkBtiQFigVRSvb30+swnpNHyYeGMoFPsu8hmPupoQ69Fpajvy4Ly23lVA9neDF4iTY3TFw1jq8mEZnFrOupFnZc9JUKxiThNjZ/FAbeXNMsXQQ7S9qKw3cQ+abVi8mvPTw4ziwtR4F66e7KY1HdyUTaAoatE2Dwqg7nHf4tKOg0vaK4sYzrngUmOz/0mzREtfjf7RgELG9vtpSxgB78r74meS7tju5JtiUw1c0lqPg7v1CRBnJ9E0RUGDxkZW4UkH80NvPtrxuwfIf/spwYi+whF+hinvtDS5NDfRq5GqP3Rr6gGerhESzsyfPOC9pQB+96T+owqLpMRE6SNQWBmSgPp2Ur00SbGMutVun37Voe4oeV/KM5125OPng9H/bV3m/mCDiBDrGisyGvMPwvMDgJHfR8s4l0SW2FP6EqkyFwGeZ9BQiZr6wjZ9ns9gpug9k/mk6hj3HF/DJf/B4i3M8mlmN3X+CujF7KgAJmJxcapNzjnc+e3jVsVy0mpkZVLuPkRGy+KFASA/90/nVfznCpGyEQZZEyNAsn1rYMvmZk9c1Vr8Ec/jHjwcSvhs7atr8u0B8OvazvVJVsp/IALsAHB/6VD5OVZasaS/XL/3qmJNj1eUpPVpHIajG8vHUyAzthzkbIaAhqTosSXZtRvLbY/qcWG55YjmFw3ephphIOwAN2F29Ii6jB40KHbVjt/l2Gj7hGj77',
      routes: [
        {
          fromAirport: 'LHR',
          toAirport: 'CPH',
          departureTime: 1567144500,
          arrivalTime: 1567151100,
          airline: 'SK',
          flightNumber: 500,
          latLngFrom: [51.4775, -0.461389],
          latLngTo: [55.620278, 12.650278]
        },
        {
          fromAirport: 'CPH',
          toAirport: 'LAX',
          departureTime: 1567161300,
          arrivalTime: 1567201500,
          airline: 'DY',
          flightNumber: 7091,
          latLngFrom: [55.620278, 12.650278],
          latLngTo: [33.9425, -118.40806]
        }
      ],
      arrivalTime: 1567201500
    }
  ],
  totalPrice: 2561
};

export const simpleData: trip = {
  userId: '5d40fd7d1ba8db20b5315258',
  origin: 'LAX',
  roundTrip: true,
  numAdults: 1,
  flightClass: 'economy',
  directFlights: false,
  destinations: [
    {
      location: 'BCN',
      numDays: 3
    },
    {
      location: 'PEK',
      numDays: 4
    }
  ],
  flights: [
    {
      fromAirport: 'LAX',
      toAirport: 'BCN',
      departureTime: 1565406000,
      price: 319,
      deepLink:
        'https://www.kiwi.com/deep?from=LAX&to=BCN&departure=09-08-2019&flightsId=243e01af46c50000aae26c70_0&price=288&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauz+jsh8Kz2h9M5Wfw97h+glCrzFLtv5tcVjwxnngE1OHE2+/RAlqQn2zC77OmmzF7g5ydrmgPlpc+PaWcPdhWGpj803ernsGzwg+BmkSMVaJ3HWsSYvrRYpqbQwxhyZRCsJvcvRed1aWY+71dSpvguKYzhnSw4AR0N1AFsK/AQ8VUyT4grh8uVc/H9pHJR2LnqBsnQpCVTqSwMZZ5gOhRSenDFP98XBmVznvvSqRynozNP9LM7P8NGcrVRCWDVqDYBCFfDqB3mzR7YCOad9NZAeKCWLeVAJgmt1a6FBb9nRWxz060aBcfwV+XueqzupsGtLs3VlLQmL9cjZ7Hb0y3985+KyPzRPDEy1f0XXpv6FHtGWcyA10QvJfthVFTyxnNMKM1+8rRViankX+0APL+vlzXVoYJIlcHSTe7SoIcm5DOpeW/kM5x6iaCQfYxwiwMpT5n8NftAUtvEvoOz8iPSrQh+K2bKWb9+DX26S8sGSeru/89HxomzWjbNCma9TM86GfqbjqXcfX7GDJbqwTu1Gbj7TlsM5olMflP47fWgMAi/STJQK5MDSPCNIRf0eim+wIGENrIQmZLTq9esM2Tn8d3iHTC4zebIn8Erddoo5Y9m80ZfjSK2fWjw5pkCRLw6I8/y/Y/PtWKRCs10uqfWZUrhFxYFoU5xpHP2/F9Y//4eEt+RMwHpjKj8EeEnGe2q6LT+EzcDp0hYyiLaF/D1dLukrrvtv1PycrtS4jscDGfS9fCRGf2QyKiYGF+CBh2Iwq8AoCait4qMYrsVz0R8Kap4Mjm5XXQ5lAYfPjfr4zw=',
      routes: [
        {
          fromAirport: 'LAX',
          toAirport: 'BCN',
          departureTime: 1565406000,
          arrivalTime: 1565445300,
          airline: 'DY',
          flightNumber: 7110,
          latLngFrom: [33.9425, -118.40806],
          latLngTo: [41.296944, 2.078333]
        }
      ],
      arrivalTime: 1565445300
    },
    {
      fromAirport: 'BCN',
      toAirport: 'PEK',
      departureTime: 1565582400,
      price: 530,
      deepLink:
        'https://www.kiwi.com/deep?from=BCN&to=PEK&departure=12-08-2019&flightsId=01af18c546c8000041e65255_0%7C18c50ddc46c9000002b65533_0%7C18c50ddc46c9000002b65533_1&price=478&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzT9ycDpfgssDeJUSTqMQDEzGaCD1Xmhw8DPmheeh9wLTXJsRzQ6cyTYoPB43nGIqiSgS03dpxeHq3gB3skkcoJYgkpRDPsI5PdgWuqu5u5sM3+RVbaKeavv/eqnQ8VukokLKrwrGVPqkr4CNC0v6BDhA13Za487dss3ONtWYBp0PJ5bKARdUqi3xjVoWb6Ej+NbhvUfb53SpUliN9GKEo3YBgGRxNqd0NkLSL/YlVUvxvGbIh2r7G8TDgmmDcXPNK1wwkIEXm2EVm5Cqe73VJUQxqZhJuDG7iGENlhXTBpSV7Q4+fgCxLCzOFcMGdo/919hTN1JeV3Iy8GZaxBX+pfHbS9jDjJDoAlK8jOX2m5s1VQGtLdmJBUHjl6e4dvA9H9Ryeh7aQ3auSbDYxfa+5cnAWB27WJJpcZFyQenA9IyqA/a3I+wo6OLlL0kWWNz0RBMMVHNJqBMlrOx3b8dzQZEHnxUHf0XwwImu/GJPGIZ/O73b/y1GyE4nVT+H9ub3cELtH0ola2nxDU7zKBAictjOCqbm6KAcM7UGIHHRpo4HGe53Jsmk0awkdjGjDgvJLFZ2kgZ+WmiUPFqtSVsWKQR1KApUVcjp/CZ5HnKlOwAGioaMWLp/UfG3blTyn8CtnpyqoT7YNvjxbcdR438LZo7yYnvqXDtjox3OxSbe3lIJe1btyk+Wj/otsLlZIqhnpImGlpLcll4Ytfjq1HY1e5aCsAAi8knXNHgsy5JlMFlX8r8uQ6bLkfoTsCSA6MFhY1e84fKAMocdQzTfuj+6Px1UTCED2mRuk4Nu0MnvLBHd5AsmopGOdfcXX1DTOGdhBIBpxBpV5IdkAlgaKQgD2lK0gZabUrtcTVVRHdJK4u5YZdewW7oDIiqpgDTOj5qexIIoR7QmVHxPjtX9Q23BYyD1FqXv7pI9KJYdIN+5p2ywpidrHAXhrnR6U3unGW18xjeHtCXADjkJ4kolS8ighoPwg2LoI6ZkroOjzt6PSGsoi3YFU/4Pywqr7OWxr8MzS',
      routes: [
        {
          fromAirport: 'BCN',
          toAirport: 'BLQ',
          departureTime: 1565582400,
          arrivalTime: 1565588400,
          airline: 'VY',
          flightNumber: 6526,
          latLngFrom: [41.296944, 2.078333],
          latLngTo: [44.530833, 11.296944]
        },
        {
          fromAirport: 'BLQ',
          toAirport: 'SVO',
          departureTime: 1565647500,
          arrivalTime: 1565659500,
          airline: 'SU',
          flightNumber: 2429,
          latLngFrom: [44.530833, 11.296944],
          latLngTo: [55.972778, 37.414722]
        },
        {
          fromAirport: 'SVO',
          toAirport: 'PEK',
          departureTime: 1565688600,
          arrivalTime: 1565715600,
          airline: 'SU',
          flightNumber: 200,
          latLngFrom: [55.972778, 37.414722],
          latLngTo: [40.08, 116.584444]
        }
      ],
      arrivalTime: 1565715600
    },
    {
      fromAirport: 'PEK',
      toAirport: 'LAX',
      departureTime: 1565931300,
      price: 761,
      deepLink:
        'https://www.kiwi.com/deep?from=PEK&to=LAX&departure=16-08-2019&flightsId=0ddc243e46cc0000a34d99bd_0%7C0ddc243e46cc0000a34d99bd_1&price=687&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzuVzIjXiPdiYCc2gwK7B+wyyxsr/QQ169LTdO9IVccRV+di8jbEbXQncnaI1qwp8SFRZoffFJqw0OqQ26CJk+sQrzaEzxzSPMNR5gelpYALN2uXeAf5DhL8j7bRYiBn7GuPztjTzzpXW/wP9LPxooBeNQWstO/Q1QIveIg3gRitpdLanN/pT8RWlhe/0kwIv36JOFO9DqmljxXZi4dv3xXeg3LZwvCsbazBumud3mT8fviKI63kFcUAsSdsRI9WsUdy0rSMcctTtgCQ75s0ciPHSG+P6aP8DVuNZMsHPGnOzGCT2wnnnDB5CmwQGxqrEExmOjshiJe4LetZM9JEXwOpWMIjArBQ+zeFCInWYeHavKJFydXKfb4p+Gl2wFpM1Zv9jtl4EpEKBRWxTMRdudc7BtWN5JAZgWUFQUjZP9xmhGkm0bn6POpO+VD9Jyf4emlpTuy2x0M9hJIcph1UbYMIPVIkVzFLzC0JlrP/QXg2/QhZWbY7KSvhwBsBlJTAMdtFtvOVnzajg7m1Uf8GbwRMYEmEZO2JmP5Zf4C0oMmwmOtHrnkfSb/Cbl8IJxvyRmwBTuIyurDtSOIKF7fCvEaPiNFav2Zyv7vIGCluN7w09PRDxb5Op+p3lozhSPLk5Lldfj0wblWPfOs9vAsUsMCbJPzNHqkW+gC7rU8s/YUDkvYXzcogrhlurXPWmhE9XDWapygNDfelbe/tVICYcPU+XS38Vb8yRfRnb14XvuiSQ0lh47avhfane2Of79Oee5gqsJzZviPDiGxkIorAyzZc4hz3Y657SuQ8oK07maNmJ8mlH+d8W5UO+kqHqc61/lI5B8RKK16G+moJ1z/mfX20qDDjtWt5aOKhCzRSyW2mUwWku9MIIHM5D/m2ZIbtmkFN0P/mRTG9B0/JQM0PgcMh764QuzdLyBzJzk6fwrKrMcXWRmLF2c8sBQXqrxSb/Y',
      routes: [
        {
          fromAirport: 'PEK',
          toAirport: 'MNL',
          departureTime: 1565931300,
          arrivalTime: 1565949300,
          airline: 'PR',
          flightNumber: 359,
          latLngFrom: [40.08, 116.584444],
          latLngTo: [14.508611, 121.019444]
        },
        {
          fromAirport: 'MNL',
          toAirport: 'LAX',
          departureTime: 1565960700,
          arrivalTime: 1566009000,
          airline: 'PR',
          flightNumber: 102,
          latLngFrom: [14.508611, 121.019444],
          latLngTo: [33.9425, -118.40806]
        }
      ],
      arrivalTime: 1566009000
    }
  ],
  totalPrice: 1610
};
