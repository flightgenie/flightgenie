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
            numDays: 3,
        },
        {
            location: 'PEK',
            numDays: 4,
        },
        {
            location: 'JFK',
            numDays: 4,
        },
        {
            location: 'LHR',
            numDays: 10,
        },
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
                    latLngTo: [41.296944, 2.078333],
                },
            ],
            arrivalTime: 1565445300,
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
                    latLngTo: [44.530833, 11.296944],
                },
                {
                    fromAirport: 'BLQ',
                    toAirport: 'SVO',
                    departureTime: 1565647500,
                    arrivalTime: 1565659500,
                    airline: 'SU',
                    flightNumber: 2429,
                    latLngFrom: [44.530833, 11.296944],
                    latLngTo: [55.972778, 37.414722],
                },
                {
                    fromAirport: 'SVO',
                    toAirport: 'PEK',
                    departureTime: 1565688600,
                    arrivalTime: 1565715600,
                    airline: 'SU',
                    flightNumber: 200,
                    latLngFrom: [55.972778, 37.414722],
                    latLngTo: [40.08, 116.584444],
                },
            ],
            arrivalTime: 1565715600,
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
                    latLngTo: [14.508611, 121.019444],
                },
                {
                    fromAirport: 'MNL',
                    toAirport: 'LAX',
                    departureTime: 1565960700,
                    arrivalTime: 1566009000,
                    airline: 'PR',
                    flightNumber: 102,
                    latLngFrom: [14.508611, 121.019444],
                    latLngTo: [33.9425, -118.40806],
                },
                {
                    fromAirport: 'LAX',
                    toAirport: 'JFK',
                    departureTime: 1566045000,
                    arrivalTime: 1566064980,
                    airline: 'B6',
                    flightNumber: 24,
                    latLngFrom: [33.9425, -118.40806],
                    latLngTo: [40.639722, -73.778889],
                },
            ],
            arrivalTime: 1566064980,
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
                    latLngTo: [60.193889, 11.100278],
                },
                {
                    fromAirport: 'OSL',
                    toAirport: 'BRU',
                    departureTime: 1566449100,
                    arrivalTime: 1566456600,
                    airline: 'SN',
                    flightNumber: 2288,
                    latLngFrom: [60.193889, 11.100278],
                    latLngTo: [50.901389, 4.484444],
                },
                {
                    fromAirport: 'BRU',
                    toAirport: 'LHR',
                    departureTime: 1566501900,
                    arrivalTime: 1566506100,
                    airline: 'SN',
                    flightNumber: 2103,
                    latLngFrom: [50.901389, 4.484444],
                    latLngTo: [51.4775, -0.461389],
                },
            ],
            arrivalTime: 1566506100,
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
                    latLngTo: [55.620278, 12.650278],
                },
                {
                    fromAirport: 'CPH',
                    toAirport: 'LAX',
                    departureTime: 1567161300,
                    arrivalTime: 1567201500,
                    airline: 'DY',
                    flightNumber: 7091,
                    latLngFrom: [55.620278, 12.650278],
                    latLngTo: [33.9425, -118.40806],
                },
            ],
            arrivalTime: 1567201500,
        },
    ],
    totalPrice: 2561,
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
            numDays: 3,
        },
        {
            location: 'PEK',
            numDays: 4,
        },
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
                    latLngTo: [41.296944, 2.078333],
                },
            ],
            arrivalTime: 1565445300,
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
                    latLngTo: [44.530833, 11.296944],
                },
                {
                    fromAirport: 'BLQ',
                    toAirport: 'SVO',
                    departureTime: 1565647500,
                    arrivalTime: 1565659500,
                    airline: 'SU',
                    flightNumber: 2429,
                    latLngFrom: [44.530833, 11.296944],
                    latLngTo: [55.972778, 37.414722],
                },
                {
                    fromAirport: 'SVO',
                    toAirport: 'PEK',
                    departureTime: 1565688600,
                    arrivalTime: 1565715600,
                    airline: 'SU',
                    flightNumber: 200,
                    latLngFrom: [55.972778, 37.414722],
                    latLngTo: [40.08, 116.584444],
                },
            ],
            arrivalTime: 1565715600,
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
                    latLngTo: [14.508611, 121.019444],
                },
                {
                    fromAirport: 'MNL',
                    toAirport: 'LAX',
                    departureTime: 1565960700,
                    arrivalTime: 1566009000,
                    airline: 'PR',
                    flightNumber: 102,
                    latLngFrom: [14.508611, 121.019444],
                    latLngTo: [33.9425, -118.40806],
                },
            ],
            arrivalTime: 1566009000,
        },
    ],
    totalPrice: 1610,
};

export const mockSearchResult = JSON.parse(
    '[{"userId":"1","origin":"LAX","roundTrip":true,"numAdults":1,"flightClass":"economy","directFlights":false,"destinations":[{"location":"JFK","numDays":2},{"location":"SFO","numDays":2},{"location":"AMS","numDays":3}],"flights":[{"fromAirport":"LAX","toAirport":"JFK","departureTime":1567291320,"price":206,"deepLink":"https://www.kiwi.com/deep?from=LAX&to=JFK&departure=31-08-2019&flightsId=243e0a8946db0000a327540c_0%7C243e0a8946db0000a327540c_1%7C0a890d8f46dc0000aa21ec9f_0%7C0d8f20a146dc0000125e0057_0&price=187&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauz/AANpxP++Dc0dBmMkNID8XxiB659/sX2S6lEkocx78ZeQxY7jiw0zo6iwBWvSk7iRXbiWIe1iGh9YJrOp3kzX4pR21QBWYgfcABWAzezHTt9aFPU0b/saf7oXTBj8APtGoFEB0ep1gzy0gfNNbV7L8vnmxblSM9HXLBj1IDIyl6zDdIQoLPkqlj3sQvEIsPV8P1oFZxDp/u/53hN2tGYY6dnJXBZSDU23QTP4x+XJtlL95V/Z08PB3qinCwJ3aVYvX7Bc1BB4Bc2y4tcrLQD7mm8hJDBJ0ClyTIBOexnfob/9B3E/toWwFhczZTjIDSoQopL5PS2LsiNB5pc5VlMUOX1oI+h54smdHbOoBDrqGrxpqPTQmYJfRnVYF43A7RBbAj2eRhy/zurtAdEkGewK2o3Qb8eQw4dOQ+EW4alHkXv/l+6hN31Xb+qfQ6kwCEMEBD+BklIEyWuu3qd/riAPCgwMNMw2Y9X2zcdj4J770XykfRK6Xe24q1BCG9cM6SWlezk+H4DzxaZmCrV2ToLHh2jRlG/1V1SnbjWDGkWqGakglrhKaYb+FdILR7UxT8DConx4v6pG1E5w29m5yyjWlvAyKnmlVFh3x1xfUeJYkMGwcvvKWIOp08qKFW4sZxxkO4VSyi5ToBQFQDhr6jDeEP8cmjnQNngOsWJ8ZXWCrO+3ET57BnsCpKgJ6lvBXjR+X2iivbrSKBcooZUWEUSI2nbzMntizkIch/8N70aR5Xr7O1xyAqTiw9lklJjwfPFm85koDIoIaBbjjCT8OGvBHoOI+GdwvvevAkbT7iFe/r9wZv6UJQ+JPQEAdHuqpnzEUyTY7SP9ScGqbycd8A+ZLoKnMCwsosaI5DgCNzbqvzEmxDW8/eyAhrhQXKEeiOheDrQQz64YpZvFurvqZWIAEUVb20SGCbgYO77clVDvoxe675CXv5IV0uLpHOO7PeSMcGnWZFN6X+d1LtmGzBi/U2DukTWrMae9lNcLkeOc0zrwswXhpOP5KdEty5v9fP0Ib9x5LN01TQZ7aM33B0fZsGDlRN8ADnDFckhcymc+Dc=","routes":[{"fromAirport":"LAX","toAirport":"LAS","departureTime":1567291320,"arrivalTime":1567295760,"airline":"NK","flightNumber":720,"latLngFrom":[33.9425,-118.40806],"latLngTo":[36.08,-115.15222]},{"fromAirport":"LAS","toAirport":"ORD","departureTime":1567299540,"arrivalTime":1567312740,"airline":"NK","flightNumber":356,"latLngFrom":[36.08,-115.15222],"latLngTo":[41.978611,-87.904722]},{"fromAirport":"ORD","toAirport":"SYR","departureTime":1567351260,"arrivalTime":1567358340,"airline":"F9","flightNumber":1442,"latLngFrom":[41.978611,-87.904722],"latLngTo":[43.111111,-76.106389]},{"fromAirport":"SYR","toAirport":"JFK","departureTime":1567379520,"arrivalTime":1567385460,"airline":"DL","flightNumber":3463,"latLngFrom":[43.111111,-76.106389],"latLngTo":[40.639722,-73.778889]}],"arrivalTime":1567385460},{"fromAirport":"JFK","toAirport":"SFO","departureTime":1567425900,"price":213,"deepLink":"https://www.kiwi.com/deep?from=JFK&to=SFO&departure=02-09-2019&flightsId=20a10f9c46dd00007d37680c_0&price=193&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzjlS2/xIzsz5dRsqBU4MtV7/SHAin0rEVYnBXqCRDNYrRaYvCKwRdi0WP0UEePvqiuWeW6Xhsu3iySBRtA4Ap+b+Gy26pd99sA1d/z2aZnQyCqiXa3dl1BbgqWIus7/oEr6Kutg2BHH6I6MyioT8MvaPrhYUaulapr3zFADweXVxkZlZAyIWj4YNPmxgWF/0EcFeoWXETpqj7XqHlkHFNgomKOh7ZlpeyPOOxarNOz7peJpfL41KV1KdBPpXokY/aYimfpFfTPf424sHYNJ0QnzT2Qi3ZVrW2/byaO+y2cgGVepWC3vWQqBWvqBVeFCZXP0VrkkepwFQesqLnl6HxofSi5lwbBmn+lA05uR/E5GsSM99e6xXM7Fez11sglbcteHcRukgS4arYuRF0b6OeH29ZRY812l9Rtbnj+IeHMaUtCcWUh5DXUMTP+vRYYo+cphKJZH/SrAMX5QiePWu6akyU8MdeuyggPA44zy5IXckomvXAECqz5DdIlwkElOPA1DqZu36DfpR3dP/ixjpSh/tQSq0Tb5Z9vJ1qgssBwUOpGFH+x5s650dhA6OlT5wuB5UCBslZdRf0fhRSL1uWh7qaJExBVVDkrVt1TqKkCrYj4ozaoWF59iVNCv0FnEWrSC7nkkQ0UI8xd1ZJioh5LoiRHBG5roYUJzcLhYKvSQnzBNB1Nq7DjJYzpey8vJGGXXX/K6F1GhnnIhzcWMongYb3JlOVo75HnHC+ERU34P5QsTF6B4j+HTcEVE+8cYoXiC7l/Bbz17F/os4gYa1Kr8QEqfbOsXXWB82H7+6Jv/w=","routes":[{"fromAirport":"JFK","toAirport":"SFO","departureTime":1567425900,"arrivalTime":1567448940,"airline":"DL","flightNumber":592,"latLngFrom":[40.639722,-73.778889],"latLngTo":[37.618889,-122.39167]}],"arrivalTime":1567448940},{"fromAirport":"SFO","toAirport":"AMS","departureTime":1567612200,"price":400,"deepLink":"https://www.kiwi.com/deep?from=SFO&to=AMS&departure=04-09-2019&flightsId=0f9c20a146df0000c5f70caa_0%7C20a110e846e000003dcf129e_0&price=362&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzG80OycYNReupG4ZzOTSjjZ/nHgHqd1V1zlY8r33VRn9/m0mN3W3ZUqr1SwSDJowzoCZ5s5WVk6bu7Tgtilhjdy3A8Gt+P45GLTds/dHTfg+lwKCF5ruZXKw2PTVPQ4R1O62NWwq7rc1u317Nzp498zziq8ceLm5bhmSdkW5eetVRdz85Y0zMf0i9lYjTDMmqc7SVjE539sWxjcrCzMnuVInwmzJkPmdcxlnG99RtrD/l9A+ibJOVZbqjygq0qaai14hc0q20lenqz4M317B9ZxdwdoHTO0FQPcA6EGg39ZO55QlQAwjHvliRSozbp9gsyVbzJkb3Uj7uVkQkDYdwJQBVn7hIiYj93hXmaA3i6+vC6ssy5o79xnqrvCXx3bW7gZltjR9OwCGIxvHmwGeiA00iSAbIhnJZmwri9C92Vlf6eeMASMiw+zMWYhtaevXmibMEQKhK3HTGkTcsysCWrPUsYq9FBwSz9cUi53SXUEyVG4+CWA85Mr6SkukFZTT5R8yBwdCVTTCZNyIzb6zwz2KIRSbK44RGbmlDkkw0VzopDJIWWnO9odyiwUzikjoZ2+/G8OphhI1/D9hn53B3kDGUGWcNcyfQUlWLd9iwhItcbv70ISuoSPZlu1bIHOU3jy7pd6Ly+Ps0j4cltft8fhy52t24UNsODBtcc0SYm9Gd6hQgPE2EXsRXhoBrYqk6TqU4RVYj9XR6sWW0NEEY9v5KALwwFEnga8fkgi8bNVpfeljrKyGJ8mMZp7qenUQygoCtAztoQ20mKbyit6veG8Ys0qrDn+VrLKTPg5lOcuePcjgMCUXf6YLU7Tjjiii9aFN95DjFKRlj5lskdKxR4W41qfh8P3XoaPNaU8jTuVnHKd3vKh6ZVyXoAkoWXrjV","routes":[{"fromAirport":"SFO","toAirport":"JFK","departureTime":1567612200,"arrivalTime":1567633200,"airline":"AS","flightNumber":1022,"latLngFrom":[37.618889,-122.39167],"latLngTo":[40.639722,-73.778889]},{"fromAirport":"JFK","toAirport":"AMS","departureTime":1567656300,"arrivalTime":1567681500,"airline":"DY","flightNumber":7700,"latLngFrom":[40.639722,-73.778889],"latLngTo":[52.308056,4.764167]}],"arrivalTime":1567681500},{"fromAirport":"AMS","toAirport":"LAX","departureTime":1567832700,"price":284,"deepLink":"https://www.kiwi.com/deep?from=AMS&to=LAX&departure=07-09-2019&flightsId=10e822f546e20000a41b15e4_0%7C22f525c346e200001f723c20_0%7C25c3243e46e300003a11f2e7_0&price=257&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzrNdYN1xniA/nrIJp42zKW66Qrq3k4hQG51Ru7rF9CsB+XLj6thuK5JoChPjocpEJ0BGIc+aWOxvNMsjsqsl5XhMByu55+ZEX4A+kbLToiAPKu44kbEI9PNockCifXTOwpd3gTEqcBRRUrDegV7elY48hwqX6zjXzkwH3ldAzI/LgJPzBz+I+F9d7Z5/JRzklRBoYWiJ+jLcI5I/+evPiiBGUN54ebDUl9wPpLadgaVh4JqKg+BOad1Z3fCn37MIX9s9J4axAS5BwUXqrNjOyChxBl29ZhmtD7iI2exxTI1GMHDljkCKdV52oI0i19Nqnb0/HSKXLqcxS3bZE3C0vNaw16flx/IjU2K25MCujON1mGPWu30sbDrZPBVgb9p/dxGcHOQkRs5bQXJH5OfTANTwz7CZHac9gwkBOdyc2vJ9+Mogp47/1gp+o/yuI3/2h+AlmIY4n/D94E6nPd9tULrkTHyaleknzT1bJ4yUi1izBmkfRjiVVLpw7N8v/sYGouZpiX8JK7UfSdR7q2lfSCfMupulxb3SLoXe+/OgKbrrsFnLoY2oRYK0R1teT8weJlxDp2Wh4TZr4o0rJ+6mL/x540nIEn5h/xXATXVQdLWo9d0PyJS21dy0BE1awL/Xj9d5P8HtR1IIiDr/7zIYCXHxGnzfVtcKcJ3pqmk7EsITFr7ziM4lnH/23y8zzlu/nAdMeWaGQQssO9uIBBgQWDhCFQf3VOKGYIhM+iktKnsX1VAp3HrAUN9GMBkuT+GAyvpJfMCRDTWz4Y4EoB16LDxQEITlHGa4pRr0no+Q54phfDQEXbK4ItLZkzetErwaNbRxtuiBP04T7cmRZniGGUjF5fUjckBQ1eVbL8OfBFvFeIgtZULfChUdqCdZ1aTCRLDaWRqXUAiTDb0coWqE4RfK1ORKBjC69qHbYucOuSbwWGGEvACMW/cJFYW5mYDCv5w5AcMbYJfFRL2hkfTvVjg==","routes":[{"fromAirport":"AMS","toAirport":"LGW","departureTime":1567832700,"arrivalTime":1567837200,"airline":"U2","flightNumber":8868,"latLngFrom":[52.308056,4.764167],"latLngTo":[51.148056,-0.190278]},{"fromAirport":"LGW","toAirport":"CDG","departureTime":1567887000,"arrivalTime":1567891500,"airline":"VY","flightNumber":8773,"latLngFrom":[51.148056,-0.190278],"latLngTo":[49.009722,2.547778]},{"fromAirport":"CDG","toAirport":"LAX","departureTime":1567936800,"arrivalTime":1567979700,"airline":"SE","flightNumber":1790,"latLngFrom":[49.009722,2.547778],"latLngTo":[33.9425,-118.40806]}],"arrivalTime":1567979700}],"totalPrice":1103},{"userId":"1","origin":"LAX","roundTrip":true,"numAdults":1,"flightClass":"economy","directFlights":false,"destinations":[{"location":"JFK","numDays":2},{"location":"AMS","numDays":3},{"location":"SFO","numDays":2}],"flights":[{"fromAirport":"LAX","toAirport":"JFK","departureTime":1567291320,"price":206,"deepLink":"https://www.kiwi.com/deep?from=LAX&to=JFK&departure=31-08-2019&flightsId=243e0a8946db0000a327540c_0%7C243e0a8946db0000a327540c_1%7C0a890d8f46dc0000aa21ec9f_0%7C0d8f20a146dc0000125e0057_0&price=187&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauz/AANpxP++Dc0dBmMkNID8XxiB659/sX2S6lEkocx78ZeQxY7jiw0zo6iwBWvSk7iRXbiWIe1iGh9YJrOp3kzX4pR21QBWYgfcABWAzezHTt9aFPU0b/saf7oXTBj8APtGoFEB0ep1gzy0gfNNbV7L8vnmxblSM9HXLBj1IDIyl6zDdIQoLPkqlj3sQvEIsPV8P1oFZxDp/u/53hN2tGYY6dnJXBZSDU23QTP4x+XJtlL95V/Z08PB3qinCwJ3aVYvX7Bc1BB4Bc2y4tcrLQD7mm8hJDBJ0ClyTIBOexnfob/9B3E/toWwFhczZTjIDSoQopL5PS2LsiNB5pc5VlMUOX1oI+h54smdHbOoBDrqGrxpqPTQmYJfRnVYF43A7RBbAj2eRhy/zurtAdEkGewK2o3Qb8eQw4dOQ+EW4alHkXv/l+6hN31Xb+qfQ6kwCEMEBD+BklIEyWuu3qd/riAPCgwMNMw2Y9X2zcdj4J770XykfRK6Xe24q1BCG9cM6SWlezk+H4DzxaZmCrV2ToLHh2jRlG/1V1SnbjWDGkWqGakglrhKaYb+FdILR7UxT8DConx4v6pG1E5w29m5yyjWlvAyKnmlVFh3x1xfUeJYkMGwcvvKWIOp08qKFW4sZxxkO4VSyi5ToBQFQDhr6jDeEP8cmjnQNngOsWJ8ZXWCrO+3ET57BnsCpKgJ6lvBXjR+X2iivbrSKBcooZUWEUSI2nbzMntizkIch/8N70aR5VTcI3u4L5OKL49aVzH4i3uJc6Dol3yBK+iU5O5L14JQJzEKb/J9jSEopSkcV1BRTYXwraqjhAMaydOXq4TGDtyvgm7ENOtWu/c8TES9TRQN4akmjZcOpFueIj9qzsGZ/qaN6JpS+iN3PHw2d1EEL/+CNZGMZaEdTphAfZWHcXk9wh5ki3D43LfR7F7SKJqYXajmp+8HR8truQ4HDIlcC6fw38gpi8+i8eljLa8JdkZE3YuUT1eZ7Wz8+MKht0pJFWYxzUcKRf5NE+l2i67y2cl7JcndhCnpRgFEb92dOIpZWj8nRvBv3bABUxMmmOim98=","routes":[{"fromAirport":"LAX","toAirport":"LAS","departureTime":1567291320,"arrivalTime":1567295760,"airline":"NK","flightNumber":720,"latLngFrom":[33.9425,-118.40806],"latLngTo":[36.08,-115.15222]},{"fromAirport":"LAS","toAirport":"ORD","departureTime":1567299540,"arrivalTime":1567312740,"airline":"NK","flightNumber":356,"latLngFrom":[36.08,-115.15222],"latLngTo":[41.978611,-87.904722]},{"fromAirport":"ORD","toAirport":"SYR","departureTime":1567351260,"arrivalTime":1567358340,"airline":"F9","flightNumber":1442,"latLngFrom":[41.978611,-87.904722],"latLngTo":[43.111111,-76.106389]},{"fromAirport":"SYR","toAirport":"JFK","departureTime":1567379520,"arrivalTime":1567385460,"airline":"DL","flightNumber":3463,"latLngFrom":[43.111111,-76.106389],"latLngTo":[40.639722,-73.778889]}],"arrivalTime":1567385460},{"fromAirport":"JFK","toAirport":"AMS","departureTime":1567397100,"price":267,"deepLink":"https://www.kiwi.com/deep?from=JFK&to=AMS&departure=02-09-2019&flightsId=20a110e846dd00002d0c65ea_0&price=242&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauz3AdRH2w+WWrr32JNhOQ1qWO2R6t8RX7BRAHjfDxBRwqyndvEMAdEz1tH5+MdMGIMSIKDk4FdsCzWnsDgIh5oaqI32sNbd+iDnk0YQHmNox+cYd0i/0hx43QO2iciDfav9U6EPBbCCJXSIyI2kBvZDvOmcQ2456wWYFcdaucIN1iaSWIgGFTUDL1u6oLhIAR6yfL032MC17koNjTSCnJ9QDepj8zPn0xmn1Tj7y6rtSHyvt//pyKDXSkYY1OfQOO9PmCPLBPvCb5GB6tSU25TOXtp4l7ZZB1AZNFefQUPesLDtUMdFRQQNUuY2J2pmvdKGbSf9dAzsGNyjALhk7a5cXZm80loW06Y9Ef9tPaXbSrqOpopYYEPnLnAel//sFfWi56Ohgfcx6u28PFBWrCfz83MW6ptLDNWPCSuljhRI/tT3XHcCBcMB2ILbUldrLRYeuAiS7NXib3Gw2ojZxlwELqmZHsV1FZgN/no9vZbnF8geJeQJxk9aBrP6iy+vhblp+0VsZ5vvCn0kMp6hb/EzvAH78pCebudNcu0zMzpCqVCLkB6y6JmA1lLi4kAp53k2pGHDw2pIP9cvqbEsb5BARFChzya/1ldl0vFuJsya+Qr8j13eEsR4tdaQYA1APCkj33J3zUt9UWseVpSFgD8KgE6do7hYqofHq6LVD5fdaFegpzPbwlceN9ZzD4BObyiKdN/R/qYMYGuOIJ/vCSGyq/zx0uPRzkZjrjw8gNjDrzqtDYqc/Ln/ai3ORhPB/LZGG7sZ4h5ESZVN5QwBMgQMSwANOnYDGzVSsQ3j/LQ58WvIbVIaL7Kyaz7r4rFtFM6ZgLsuay/9aCEeiJX3tJjnw==","routes":[{"fromAirport":"JFK","toAirport":"AMS","departureTime":1567397100,"arrivalTime":1567422300,"airline":"DY","flightNumber":7700,"latLngFrom":[40.639722,-73.778889],"latLngTo":[52.308056,4.764167]}],"arrivalTime":1567422300},{"fromAirport":"AMS","toAirport":"SFO","departureTime":1567659900,"price":333,"deepLink":"https://www.kiwi.com/deep?from=AMS&to=SFO&departure=05-09-2019&flightsId=10e822f546e0000018f6b794_0%7C22f525c346e00000a39f9e50_0%7C25c3243e46e1000030cdd633_0%7C243e0f9c46e200006b8e1c8f_0&price=302&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauziFmQhhpSC10ju+iD0UmQPVX3WnkQnNwko6fNTllOngqOJip8IFw2QZ2b9ZUzIurVTntFvGrENmWETCsmUzAYNVJR4hjVzU7gF3NnaVic5FaNdVEDtVRvJzS4wRl8ENGNjkTMGvn7/2mCuLyRe8dY9DHMevC742G1w/APrqZPDgQ5Ep9AYoBwv3ZS3zxAl9X3gGZpd7MB2ktpZuXOPdZOI/LiVqpVARPQSXs+9JjVKLZfnv+xfJyeNArqoO/K3yzk3DFSdNkCh1NlyJmog9Xfnno0XFsTFKF2TPAlnyL11eN4u/a2PzZaVs/vMMt//F8qCrGyd9pk8QngWoJL3ToOVtMbUsUBj4nk67LMqDuOdE6UEzPOOq7bVStXm8+eaWUDpgD5u3CKinUWddIYIIAOI/vR3cAjzaHCrqOq3+OpS67wCDQTQA7Avw1cUsZQOoYnxIycsoG2nESTLTG6rVFc16Q/qWHZeJDrChPViqbSx4QHai11DYpFiglW2b3V6AubkDyBVp4tXxpJwXOjjT5y/rModC72VNjgNH3uVJI+hwgjw5B9R1+emtXqq01fnPJY67VhXpy0p4bUSAbpmuZCZ1Q+CxmJ8bf5lvG03l2nBZG11H4qxGXbvHrLzzDxyKP3C2+9y8fxkWO/sutJDtGyCE410JZxgfoP77u3o9C2QF6zvhGjRMIdFMUwTJK0MlSyMuUQwd1C63zs9HFfkooQpJBkzZ40S4XjFMh/viNcEKQSG+QAmHJM8GRgYncG7cTjkpPQQsYY/jYK6M+TAH5on/2BF/Nlx+aTIEAYfzmE9D3sMiK0SzyrHzTpKdE7QFf6CkEPoiY/kiwIn5YD67x+Pp0IfZzvoCGA1CrZkXrLOJOe7waScpLe9Q5MuzxKt6nWDrv/kDoeLky/TLOxa0yEt8CqA7sEfTDSFU4TNck+/OO8+VihJmT8TRejwQ9LsCAqiWyKjwKVgjcfHdMGpz0TAGN/TAP51YDt3tci6xNZAHirhtuc3v1gd2vw8gap6vxVj/i/JEthv+VlEtZq79JAeQ==","routes":[{"fromAirport":"AMS","toAirport":"LGW","departureTime":1567659900,"arrivalTime":1567664400,"airline":"U2","flightNumber":8868,"latLngFrom":[52.308056,4.764167],"latLngTo":[51.148056,-0.190278]},{"fromAirport":"LGW","toAirport":"CDG","departureTime":1567714200,"arrivalTime":1567718700,"airline":"VY","flightNumber":8773,"latLngFrom":[51.148056,-0.190278],"latLngTo":[49.009722,2.547778]},{"fromAirport":"CDG","toAirport":"LAX","departureTime":1567756500,"arrivalTime":1567797600,"airline":"DY","flightNumber":7099,"latLngFrom":[49.009722,2.547778],"latLngTo":[33.9425,-118.40806]},{"fromAirport":"LAX","toAirport":"SFO","departureTime":1567864800,"arrivalTime":1567869840,"airline":"DL","flightNumber":2313,"latLngFrom":[33.9425,-118.40806],"latLngTo":[37.618889,-122.39167]}],"arrivalTime":1567869840},{"fromAirport":"SFO","toAirport":"LAX","departureTime":1567904400,"price":56,"deepLink":"https://www.kiwi.com/deep?from=SFO&to=LAX&departure=07-09-2019&flightsId=0f9c243e46e20000add1ff22_0&price=51&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzBMcWq4Kintnwy/Rmot5bl3QIK/Ph882AG2pm+xcqTiLmHWrQ/kYccpbiWSctag3uIiyVR6qf1G5mv4PJwM+XN5NEKg9za+ekUavGmkB9fEl4jjC4FHgKJFjWGy81fOUmwAbSE3uctR/LRxclZjok8DBes6gje0JYjKMfZ0tygTW1fCzckxemt2F2J0gyS+GzXb8/YchsOr82zvbZKxdXeHnaxxNZVprscIIyhy93rTsLABcL0aG1q6QFYCLoDjyvobj8zlbtWpSjtTGVLX4Wz+IuvACHRPC07C8ZBYyaZVU8k7XdPr3Y02OQyIDuI4wKlzOOhpwJoZZ4/oUp2HwLkgYL+Qb2vxPLPrKiQuLw6lmCYH65+KHq6CIPi1O5rXNCpdCaLwZhbjCGjFyoisdbLbCg4xTdeE1+k8LS8wGiOZ5ciX9v+FB/nXN5BEmVPv9kPrBQl1z87LqPwinS7tc6I34ipCjBuEgurv8Ck6RFmWTFThISoRV2VBFT9g/bxI8PBCl6WRrP4/knoyDd/o3j0MdiOU+oBjYEmO0BsMSzJ/q+Bt+8rBS1q/KbkAO/T15NEfMTKECfUL1ndbF3c2pBD/JH/VDBha9X2+sJmwcLriHGx3KUeis77KRlbZX7g0OKH5EVde6WVfh7KFKaSmOfXOi/spng5DzI4ICiGjOuWoK2/K4ae1rPpwSivIiuMkI/mbv3jRDIgAjERhEWJr04nSmOSBdhSMGfja7TGt/WG1ZFr2XHQW7wYiDh1PpGUGRV8PbwsJWtpZrCE11ggfW7qkBeGbR0VbTRQzmHCNpQ+jHVu9EkLrxpFmn4NomzUKJh1ncPCr81n1qHhEgYv12PsQ==","routes":[{"fromAirport":"SFO","toAirport":"LAX","departureTime":1567904400,"arrivalTime":1567910100,"airline":"AS","flightNumber":1936,"latLngFrom":[37.618889,-122.39167],"latLngTo":[33.9425,-118.40806]}],"arrivalTime":1567910100}],"totalPrice":862},{"userId":"1","origin":"LAX","roundTrip":true,"numAdults":1,"flightClass":"economy","directFlights":false,"destinations":[{"location":"SFO","numDays":2},{"location":"JFK","numDays":2},{"location":"AMS","numDays":3}],"flights":[{"fromAirport":"LAX","toAirport":"SFO","departureTime":1567272660,"price":53,"deepLink":"https://www.kiwi.com/deep?from=LAX&to=SFO&departure=31-08-2019&flightsId=243e0f9c46db0000320be200_0&price=48&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzqUjhAcOYUxKrJNV1qDbEXsPW1AUto3oLfTe/Hif8/9P+EIJbzWbdJnFrA40uKv6uGCsTLBmKXo50To0rZ9SzC0Mwl5Lx8UdX7dyDoyNy22cJeZU90hPa36Ssy6ug5gHq5vQWKYbWRi5ui77xIzelT2em2ucI/u26jpCFdyyCgUtV44n6dzx3xp6ohn9mUrcRoI0iuYNDTVG7R3aTlqxXcDdKWNj06zu0lJmULKo+XhGLJQxNJBiyt/2oOTm2Mr9EP7yQRzUsjnRwr9Ck/95Z3ZAME9OVJHgs3ymbffqNuaWubm891CuBJdKiCAl6w6fNEzE6WGPyOinCe0hBd7ZIDoRBn/PRz4jfSfSCc7Pr/m137z90i5k2mj3BdzF1VnYj7PEbYl8KIAj0pCjRAZ0WFK3CL/7a9XlyIOwEvrSiNhjjnf2lkYcPwudFi5TiyLVIinHXgNBEML4U0C1flg5/RuxqXfX8GYCYLA9dFU95S04akCBY/Pjzfnm0sevX0lTy5F+UUIp+PPuSYcTtyXL7iKQGyrvT8h8CgDbmVzondEYRfXxDqP7ntB3927fKZEiKj/Odq5ytpZyAk9iv3NlbfgJBI1bbAuJHM+/M8i1KoglWRwwldjq2uEh8AWkrohzgDn9ag6Wr9liu2w9YLth6L5Z7QPrmW1DU69QM7pxqcNioRGBbbKelFmeDenXnFYqcuZ98tT3o71txr8+W7xubC8rR7Z1Thj4H/zimxhm1bulgxp/LJbSqgXiy0pA3sryfM8aI5FWAsqqLqNZv0MuV2Y7BCAJgjs/AlE9nnF7uD8I=","routes":[{"fromAirport":"LAX","toAirport":"SFO","departureTime":1567272660,"arrivalTime":1567278000,"airline":"DL","flightNumber":1405,"latLngFrom":[33.9425,-118.40806],"latLngTo":[37.618889,-122.39167]}],"arrivalTime":1567278000},{"fromAirport":"SFO","toAirport":"JFK","departureTime":1567491300,"price":256,"deepLink":"https://www.kiwi.com/deep?from=SFO&to=JFK&departure=02-09-2019&flightsId=0f9c0d8f46dd000085d460a2_0%7C0f9c0d8f46dd000085d460a2_1%7C0d8f20a146de0000b3cdbcd0_0&price=232&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauz+HTyrCU1xemYWbuQ3YKY3PciW8V9/Ea8k2S0ez22lNbrh9CEr+E3b1mqLfgE53IfGKcbqDz5DqXaqOwRsN03SH9W8GOxKplJ9/P39/CYCSSmcdoALhy3TuFl5Vmwgkbmd+e/R5qp9o7gdR8qQVirP/gIzVlMwXortgo1wkZn350w+Cuw3bOS3eUnCdgMn5/uHlNUhuCF3/SENeSLOvbiROvWlg1wAnfZos0avQtSZfpEM1RSRYaTyp9Tqr9LsakNHZK2efJT0HHvUmG2VZCoirQzg8esUWTqWyueB1A7XJM6zaApGFszQPQLG1Ml/+h+n/om2tQPoujygtcLXtQCnvkYn6Xll8Z6tjcc3H35+v8gwokKqMOyT3GcTMNfzGlnP8lFG+mLUPJ6cA8wdpObr5PKYphS4NV2pj42bvvR4iTNjMVGDHNluItZngKMkUFWJLHhpRV+XmurZJO7dU5RJMeeKCPJTLtAnTH/Av3P8rssMPOdEHQAJ4zuOEEXPo28wxLJWtsDUc52XjV+rqOfhVOEJynrf53iLiar65uGuJxE8Yp6ZJLjDbhE5MmBm3y9CvdjkKn1M/QGuk/RJAPh017hvU3KvqY/ot3ZgQEOdq286Wo/MydMJ/Wfd+4DCnI/etuvwHLoZeY3fPIcZj7v4Zv2ucFsOPLIGODhsQuPTjuQ/hvr1Q6SYRXAsAmi39in9I118UV7REtzUPSFycsImaleU1ISIDsTppqR4k6YA23tZ8aiY9u+czjwU5NXV1QK9mvpHoGLXoituz1mSJUjZhEEMeEvk/6/ZhR/qP0iu2u+mTQpFY2B01ikbip7iqa+68wNnl1moAndH8tI2EIV2DuakmjkZukH9ZiDiKGTlP2DhCzvB3t9EutAypZRX4B2tVz/hWAxHPPgr7/koohjhYMl9ZqX97nYpl4mqRPgsljw/Jjcuf9LwYaVKCRiujpFaXFgaZGA/h4gEyJMnQz/9w==","routes":[{"fromAirport":"SFO","toAirport":"ORD","departureTime":1567491300,"arrivalTime":1567505820,"airline":"UA","flightNumber":1264,"latLngFrom":[37.618889,-122.39167],"latLngTo":[41.978611,-87.904722]},{"fromAirport":"ORD","toAirport":"SYR","departureTime":1567519800,"arrivalTime":1567526640,"airline":"UA","flightNumber":3544,"latLngFrom":[41.978611,-87.904722],"latLngTo":[43.111111,-76.106389]},{"fromAirport":"SYR","toAirport":"JFK","departureTime":1567553940,"arrivalTime":1567559100,"airline":"B6","flightNumber":1815,"latLngFrom":[43.111111,-76.106389],"latLngTo":[40.639722,-73.778889]}],"arrivalTime":1567559100},{"fromAirport":"JFK","toAirport":"AMS","departureTime":1567569900,"price":216,"deepLink":"https://www.kiwi.com/deep?from=JFK&to=AMS&departure=04-09-2019&flightsId=20a110e846df000092494057_0&price=196&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzeeSpzp88OfxdRjZpoQMuZTue7SsFM/BC7ucMNf41fStw3cPBbjLSrxiYtNCXnoSDDxghaenrIbiTKple1P7X/y2zZ8UD1WVvTLsFTRb8o5NpVQ2cZF0TCUDp/IyzavYBfBaJ6ZT6FrTHC7GiAHvAuAvmr/esVgBYGv1LE2TCLjiEl0N1ccd+QHfPcQdqvIA34yUUbEGWkMRBjv8HEDd4xSokqvzbmnwbgz7ScDGor0TjD5AUPZbBixlE6ual5CuBUoMgCebiiMkQ0aLt1ntsX8BkY1/Ey9NykApNuUNuawoNqm0zHru88c0v82M/zE/svknmB6Xbakwcs3Lkbf6RGVkC23Xhsnkyncp8z+FAEAbQfatHVObkMz40a/9ixlW4YgKqhpSJHJ/56YfynswV46EiYiDdFgfebkKpH8+Ym7hG1gP6yp2s41vDtpJ++U/H1icSOFYSUWaO+tZCcBZHLdDoBEG007/OMBN4/7vm53iQSH+kvga/JWIoTnHkV9810qgDhNrT1lrddMwhmdjuv988AxQddPRqjGfkEVMZvDLTMka/p00p1XWbmFOc1DXn7pJLtXhX5tsmsyNOelCSlZUH0lo5eVaE9jxQO2dnfZqG2rrtLDImjQerk8NVGXqV3/ESNCiS+5p0JvyqBTarcBoIwRcdmB5ZnA/xg7FvbSGUdEBybr1OgjdETcfl+ski919euVUI9lVl1xoydwmoilzhKKcagOP2sQ3vZta/KZfqu+ftShEls/Iy4Qrb7u7kEP8OHsUjWVNAQz4EHfHbCZpaY7dKXxrfMaLNCZlz9tnlcPS7vgV/U0/7D2aQwDEVkWkresjgyJ3iHYAYFM8F5g==","routes":[{"fromAirport":"JFK","toAirport":"AMS","departureTime":1567569900,"arrivalTime":1567595100,"airline":"DY","flightNumber":7700,"latLngFrom":[40.639722,-73.778889],"latLngTo":[52.308056,4.764167]}],"arrivalTime":1567595100},{"fromAirport":"AMS","toAirport":"LAX","departureTime":1567832700,"price":284,"deepLink":"https://www.kiwi.com/deep?from=AMS&to=LAX&departure=07-09-2019&flightsId=10e822f546e20000a41b15e4_0%7C22f525c346e200001f723c20_0%7C25c3243e46e300003a11f2e7_0&price=257&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzrNdYN1xniA/nrIJp42zKW66Qrq3k4hQG51Ru7rF9CsB+XLj6thuK5JoChPjocpEJ0BGIc+aWOxvNMsjsqsl5XhMByu55+ZEX4A+kbLToiAPKu44kbEI9PNockCifXTOwpd3gTEqcBRRUrDegV7elY48hwqX6zjXzkwH3ldAzI/LgJPzBz+I+F9d7Z5/JRzklRBoYWiJ+jLcI5I/+evPiiBGUN54ebDUl9wPpLadgaVh4JqKg+BOad1Z3fCn37MIX9s9J4axAS5BwUXqrNjOyChxBl29ZhmtD7iI2exxTI1GMHDljkCKdV52oI0i19Nqnb0/HSKXLqcxS3bZE3C0vNaw16flx/IjU2K25MCujON1mGPWu30sbDrZPBVgb9p/dxGcHOQkRs5bQXJH5OfTANTwz7CZHac9gwkBOdyc2vJ9+Mogp47/1gp+o/yuI3/2h+AlmIY4n/D94E6nPd9tULrkTHyaleknzT1bJ4yUi1izBmkfRjiVVLpw7N8v/sYGouZpiX8JK7UfSdR7q2lfSCfMupulxb3SLoXe+/OgKbrrsFnLoY2oRYK0R1teT8weJlxDp2Wh4TZr4o0rJ+6mL/x540nIEn5h/xXATXVQdLWo9d0PyJS21dy0BE1awL/Xj9d5P8HtR1IIiDr/7zIYCXGIM4q7qjImuStPR5rA0psg6KiB4hV4MWQbjpOco72FRKJ1CMoPh2YnRto/aN3m5FUNbm1PxF+4QrBsaDajb0ct/GKNur6QBZR1IP6UaZc6fxsvNDHZnVMRNlbL0Fkj6zJNRDBawbuwBjr92uWnjQXds3opFRtU3H4A/AVyzwmLRYQoYr1KXfCzyqletEM4Mf2b5mvhq7PJ84G7RhdLHEGl7K6sU2rbGHUZCBBSk9WKCxcDOZJHwC60cCg0uVlJJfKbUDx/s+MRag36LLSXE8Lrc0lIPjUFBOHhvZkvTvpfGN1H01Hrtl7E7HWZowTzfwQ==","routes":[{"fromAirport":"AMS","toAirport":"LGW","departureTime":1567832700,"arrivalTime":1567837200,"airline":"U2","flightNumber":8868,"latLngFrom":[52.308056,4.764167],"latLngTo":[51.148056,-0.190278]},{"fromAirport":"LGW","toAirport":"CDG","departureTime":1567887000,"arrivalTime":1567891500,"airline":"VY","flightNumber":8773,"latLngFrom":[51.148056,-0.190278],"latLngTo":[49.009722,2.547778]},{"fromAirport":"CDG","toAirport":"LAX","departureTime":1567936800,"arrivalTime":1567979700,"airline":"SE","flightNumber":1790,"latLngFrom":[49.009722,2.547778],"latLngTo":[33.9425,-118.40806]}],"arrivalTime":1567979700}],"totalPrice":809},{"userId":"1","origin":"LAX","roundTrip":true,"numAdults":1,"flightClass":"economy","directFlights":false,"destinations":[{"location":"SFO","numDays":2},{"location":"AMS","numDays":3},{"location":"JFK","numDays":2}],"flights":[{"fromAirport":"LAX","toAirport":"SFO","departureTime":1567272660,"price":53,"deepLink":"https://www.kiwi.com/deep?from=LAX&to=SFO&departure=31-08-2019&flightsId=243e0f9c46db0000320be200_0&price=48&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzqUjhAcOYUxKrJNV1qDbEXsPW1AUto3oLfTe/Hif8/9P+EIJbzWbdJnFrA40uKv6uGCsTLBmKXo50To0rZ9SzC0Mwl5Lx8UdX7dyDoyNy22cJeZU90hPa36Ssy6ug5gHq5vQWKYbWRi5ui77xIzelT2em2ucI/u26jpCFdyyCgUtV44n6dzx3xp6ohn9mUrcRoI0iuYNDTVG7R3aTlqxXcDdKWNj06zu0lJmULKo+XhGLJQxNJBiyt/2oOTm2Mr9EP7yQRzUsjnRwr9Ck/95Z3ZAME9OVJHgs3ymbffqNuaWubm891CuBJdKiCAl6w6fNEzE6WGPyOinCe0hBd7ZIDoRBn/PRz4jfSfSCc7Pr/m137z90i5k2mj3BdzF1VnYj7PEbYl8KIAj0pCjRAZ0WFK3CL/7a9XlyIOwEvrSiNhjjnf2lkYcPwudFi5TiyLVIinHXgNBEML4U0C1flg5/RuxqXfX8GYCYLA9dFU95S04akCBY/Pjzfnm0sevX0lTy5F+UUIp+PPuSYcTtyXL7iFF8duJPkND5yoPLx7/tw/lmu82goc9K3YoKKsxqwTPi7IjGWEL63176HsQZU3C8/CV3LUbRssCptKxinB7rqRyxq1qYgLh2C5M1hv3MpqL+VhOemRIRYYi6zzC3D5QdQzDF9xWF9eCty2EIBur/ygolw/alhkS+Z+fJDZL/aB2tcrpE+LSvup8aYem8IcKmbHQwc75rzkuslHo/fAIYohHfUnCqyu3My1erRN1jRNzv/WLVMbSlTeDm/6qvY/XbiP6ImH76yagaZiI/G2/t9PY=","routes":[{"fromAirport":"LAX","toAirport":"SFO","departureTime":1567272660,"arrivalTime":1567278000,"airline":"DL","flightNumber":1405,"latLngFrom":[33.9425,-118.40806],"latLngTo":[37.618889,-122.39167]}],"arrivalTime":1567278000},{"fromAirport":"SFO","toAirport":"AMS","departureTime":1567477440,"price":444,"deepLink":"https://www.kiwi.com/deep?from=SFO&to=AMS&departure=02-09-2019&flightsId=0f9c244646dd00005db2c2a3_0%7C244610a146de0000d1dca376_0%7C10a110e846de00000c5f15eb_0%7C10a110e846de00000c5f15eb_1&price=402&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzi69BKMJK9uKiDovyOLXtS5Fr78L7ObB9ys4h40FqfLFOoTVVmdWSzvZXgznHfBEU/+Ms5N6tPKhkHjc34UvD0CeuOfgjF6A7/8fEIVS3nAvpgO6GLf8Uh5r5RS4cmKEx7DcxYPXJH3KvCF8n6jCPGLdHrxudNjAPTbeH+g6iuVouPJDM+Gi9De6Ym+umPvrrx1iT2QZasXgAo4R+ZnKLb2ya6EbBhARMDm+YDLISunH1rp/StbRCy7ADpYCMDbK3fHrMWtax87i+fDCELPseXK5E9mF0qGE5jMxOXcd5e8f/9xloEl0CgZLBjuolLxcSkwRQXfG3HFN++hFShB7zgRh/SV8PR+BncHz2t1Jd2/koJd4RWKTNDoIiOVG5lBh+nDhj3cKPYCo5CVKfIoqZxKdhvG5pBwHEej+nLkHfDLI50mQZZw/N0fi565N0h9xXj+H3aqYfaaMaD0NZ86sPg0xyDLGecmqf1bKCCISdFMnxIOpwJId0Awf0mW3hPtuduQC8CgvJT2EfRGAdyf1UR74N8jW3M9/qTITE/039GEwmZn8zQM4vjNN061+c0Y3y4VlaQeO265K3nNzCewugAE5TY1Daj+i+9utJ7dN1FYAoz8n/VQyG6OYklrzT9QwDPBaGiUlFWnr0W+IkhYjbCEKkMmlcJOQJ7Hr7qt2Se7Ckp7iZfSNGyH7IFjf5sI65t5w9ULsQb6w2E5gVYc5pJ4fRrrTW0PqXvadUhTIbjk1ZNeMBa3TQQkCNTg3u6SC+1w0Xap1St6fJybRv1MMXqC29VGroAWCoRwfY8aSfgpEAnnzeWUH9rb1NvUMnXoCgqJojxz0JzK9Bp5WSVrhGYD+Bbf6jsCS+9z08TIbrbpMgoBsDurg+0GE4CS9TtHCH/HJV+Lwb9Quh1+NnEKwGzGD+wMS1yfR7toi7sFlfvV3si+L1FeMZbR4wsqpTRAO7cCIOQ7jdhP1vmRElu8cgxktt2869NiPTDIi22WAWDc94jGKsGWNGw6tKZKxGjNk7EnLcAf5N4Zdq32/o6Uvu+XBkmuHNFpahRi7NFl1DZWc=","routes":[{"fromAirport":"SFO","toAirport":"LAS","departureTime":1567477440,"arrivalTime":1567483500,"airline":"F9","flightNumber":2078,"latLngFrom":[37.618889,-122.39167],"latLngTo":[36.08,-115.15222]},{"fromAirport":"LAS","toAirport":"OAK","departureTime":1567546200,"arrivalTime":1567551840,"airline":"NK","flightNumber":1154,"latLngFrom":[36.08,-115.15222],"latLngTo":[37.721389,-122.22083]},{"fromAirport":"OAK","toAirport":"CPH","departureTime":1567566000,"arrivalTime":1567603200,"airline":"DY","flightNumber":7070,"latLngFrom":[37.721389,-122.22083],"latLngTo":[55.620278,12.650278]},{"fromAirport":"CPH","toAirport":"AMS","departureTime":1567607700,"arrivalTime":1567612800,"airline":"D8","flightNumber":3540,"latLngFrom":[55.620278,12.650278],"latLngTo":[52.308056,4.764167]}],"arrivalTime":1567612800},{"fromAirport":"AMS","toAirport":"JFK","departureTime":1567689300,"price":242,"deepLink":"https://www.kiwi.com/deep?from=AMS&to=JFK&departure=05-09-2019&flightsId=10e820a146e00000dbe59fc3_0&price=219&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauz+G8ZcRNXsnHpqqqEDgWkfi+qF6pTq/E+Ndbe93y7fmjs5tUpNCHZqWevVkDeq76JVfu8tI/LWPMo3ZtzlBB6ppVNCu6hu59xM9/FF9Pv8b/QNIfqvzB+BZ2wNzFZNATH0z5kOmgKde3izobnp6C0JLeRtlYEh4pO1+JWKCLCMnTdMYaQYC8FfaiKinxNQ9kUo+7KidXWaC6a6RRxB2beOMkf6PAeUKCavViTL1MmSwwbK7DQP7vDchKEex2bw0cn0sj4beU3fJbCnMGcDScPViG6nU6Gh6xrze+0jMEbfnvTUZajnvKQmPA/Aw364RRq0jFULiXRDVr6zoJ2vT5PrJ79/wHf/bomjwH6EnDSnw2QX+GXop/x3fMrtwPvET+je24cGyvyMtpfhuoPLaWpXUgpxhEozlZqFA5cWRkqEq/wYF5dcwT9REyGdXDVw8fhobv8rgJ/BmXfr8IlNpv05YmUDQlPsOjg3Iff2aaMt/kFGb9L6KELUnWnprREdPp3Yz+uh/euUDCtIIBb922MvXdYz99UvjGTBkvj/FoF92YNTGXkXFrCDGrAeY6zfM4Hh9rbP6MTnviigZMh8xGEk7dt1p4FKRBUC72iWC0dj8sWCAsRrFY8pVq4lAG9OGQdbFXSKk40dz+0+Mj+4gaYJrxQaLu/stzgj0XGnSXOsT5g32fAYMCMBE5GtzxNUTRwiKfvEcGst34jNVB1PLplu5x9mDBAWEzqTY5TsVM+ezs+JyceWBwiHJxnBQiSOWFK6MgADJLPJW5HJhDWPb7C+kQhlpsUESQ7C06TJTK7KW8=","routes":[{"fromAirport":"AMS","toAirport":"JFK","departureTime":1567689300,"arrivalTime":1567719000,"airline":"DY","flightNumber":7701,"latLngFrom":[52.308056,4.764167],"latLngTo":[40.639722,-73.778889]}],"arrivalTime":1567719000},{"fromAirport":"JFK","toAirport":"LAX","departureTime":1567854000,"price":134,"deepLink":"https://www.kiwi.com/deep?from=JFK&to=LAX&departure=07-09-2019&flightsId=20a1243e46e20000cb8d5d6b_0&price=122&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzETrxdP/zCjhq6rPTPDofpia5sk8VjtvTspZzWVKYvjZ8Pow+s3D/Qz0tBAp+xdeCm+JUoB9wQ57U8aJL3SfK/ETJ3cU5LKvXgwhm0+QMxnEsJRgr+hJx699zGYMLSY0iSlr24oo+FghDixzgjUlJHUUUvmej9s5wzCmOmi6Xm4sZWerN7uASjao3AMiARTB/95Omgc3XCdjA8vH+S48GVVfYSnF8oM3a6hqu0eK8Oa3eRdgzL6bOjDC870L40sT0eE6DwEpoHeGNWAAMxry/++jmiadSH/Sn7X7ZfePkwKm9OTArLBrX/0CK4QN9v/c92Zuk9R02UpyGadtBZU8gclrJVqqOpouVfR0AK6vowlNvHeBk+ZTTsRBuLmHIrfAyvM5uKHXR37Eq3orFfLQnQyVFegzNrxGCG41h8T17RMRkJ4LyF1DG8t+nW/bEbx3x1FeaeI6ZH3esQqUK9CaaxvZN95KbG9NfBXKgIkHLjtj+eKBs5pP7m+MwQGJJqhPmECIt0ZgmdGIJA4xkeQ7PVCjgNLu3AyJjLOWcy4JYiUHBpWom9jaMRvl5JZhg/PoB7tuOvJpBkSaTFWL9YUyIQZKOv52FDlLpO5Xs2cmL+5mTHihL0uQPKZTcNbATXLo/UjSobo4/BmhLejEl8tIOmU+g20qD80dgXuEkIHPsOj54JZJFLwVILthdvhVkeJXtZPExlT8LcyLXs+ET4adJYL9Vw1rbp8h98A7btgRHOUvuqzmU0zymG3yRarC2eLxJ58yNbRFU9/lgUba4liDrafDE83Hm2KIk7/pzjVzIP1uu6YYZG4rYoAwTYoDvqcIcbpiGOPXnYq8KQOzwpnZS+g==","routes":[{"fromAirport":"JFK","toAirport":"LAX","departureTime":1567854000,"arrivalTime":1567875600,"airline":"DL","flightNumber":1529,"latLngFrom":[40.639722,-73.778889],"latLngTo":[33.9425,-118.40806]}],"arrivalTime":1567875600}],"totalPrice":873},{"userId":"1","origin":"LAX","roundTrip":true,"numAdults":1,"flightClass":"economy","directFlights":false,"destinations":[{"location":"AMS","numDays":3},{"location":"JFK","numDays":2},{"location":"SFO","numDays":2}],"flights":[{"fromAirport":"LAX","toAirport":"AMS","departureTime":1567312080,"price":455,"deepLink":"https://www.kiwi.com/deep?from=LAX&to=AMS&departure=31-08-2019&flightsId=243e04cd46db0000d8db8aaa_0%7C04cd10e846dc0000c5bf1856_0%7C04cd10e846dc0000c5bf1856_1&price=411&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzxDPre9dQXvYLFUVoZxYRDZZSJRtzx1TxwLNx2q9aX0p83brBcD0JgUuIzMA7QM+064NMArhQFwFNm9Nc2ZCWTg2ya99CV44+ULdRB+uW3Ql/O73VfhZ2oKVma+WoNnlsctDCOROox0tzubi6lAIJz2tV1p+K53ycmDnRitjeQLA3TCAqKQJOpWDBiKovNBYUei8dZ7sBFWjnOlw2CMHUF8N4Yw0c0XzhKJ6mQ/lUGvoQY70tHSO16WZCpcU5Kfnt+tZd4BniKZy6ZKE90tBoao5EB3nI9x0joki+vnWotahxoZSBbjjjLpwRz4gYpqIBX4kBuEbhte0FWp5VAwX42aYK3y+NMJcfou2gfKBVhd6Nz8EdX2c42uK8akcrd66ceqdVd/uZOPh/jhvTJfwuMLigH0wYvpaMCwTwFN1dBMHCRscRtTwOg9aNDPnnbcRuv5SS7OL+q3j8Zl8rLgE7NAIvrdUK88MS5Q2ATDtrKSwtwSTWsA1BVwA4bCB2tIEfpLhca2yung+KNyw9c/uJI7nJW8/due18JI4Vxv/IC4j/Eho5ZsDL5CpFZ6i7ht+GUCvigj75hes3aAY79lJecuCQanf2tvOsXlL8zpKOzj83ltmZ1NRtbZ47jCcxIXd/3enORRs/dUUaTc4i8LXqW1w5w+5TH5WF03EK6JiQsuGjxGqhoyTI20/WlZUJbWFUNMWIGffU09uJYs4jQlWEz4AVUgMp0WiDpDmOmNzHgezQCwUy0hBLnIJbxLHCdWYFCjcJl0+1Qathx4DIeuO8HpDGdM9bJtAfYe9cik9MJ94j3al37ITTNbyGFXp5hxe2DeLrE4f0+Yj9LsEI53YkXj8eAskTpfXJLWCkw6bh3IiJGufdxZu6zdwNV/MWW9ZiB42QNdj10s7+GBZzKKzZfKGFRoekXyo6om9NETGKtdlMGJ0Qzz3wTLJzxz2xGOeaKIOrx1iWoy3Z83byGjDQ2Q==","routes":[{"fromAirport":"LAX","toAirport":"FLL","departureTime":1567312080,"arrivalTime":1567330500,"airline":"NK","flightNumber":310,"latLngFrom":[33.9425,-118.40806],"latLngTo":[26.0725,-80.152778]},{"fromAirport":"FLL","toAirport":"CPH","departureTime":1567395900,"arrivalTime":1567428900,"airline":"DY","flightNumber":7042,"latLngFrom":[26.0725,-80.152778],"latLngTo":[55.620278,12.650278]},{"fromAirport":"CPH","toAirport":"AMS","departureTime":1567434900,"arrivalTime":1567440000,"airline":"D8","flightNumber":3540,"latLngFrom":[55.620278,12.650278],"latLngTo":[52.308056,4.764167]}],"arrivalTime":1567440000},{"fromAirport":"AMS","toAirport":"JFK","departureTime":1567516500,"price":356,"deepLink":"https://www.kiwi.com/deep?from=AMS&to=JFK&departure=03-09-2019&flightsId=10e820a146de00003e555256_0&price=322&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzclkIRL06aFFhpQdpArwVX1UnXx2ykwdt/i24O4dY+sj3YsqJVyS8rKCN47ZkylV6uc/VJ+DimC1qIPCmd5jkfHCAroFlWdKWdcpFF9OQftQ6zbknWG3POBFGbZFx5ToHUXGZvI2q34KFf/pUcs/GsxM2TWZQv74ryMfw5CGgLvkDsFlvuoJTJkgW4QwSMtee+92WHQsREjRhJLkrZZGVG2Ri7bZkrPCIAV3jdgA7WJ44pAknwnVl/m37VbluYDkNEc35XYX5dADzcYB0rbhoYukVDok5pThdFt0l0PShu7eUpqkLemROKzyBmJ98sQscBwJHrVG49+jkSCKSM6FJrkrt+2KqMdXPHloxoARspT8UtcP256POczLtpcSUwCTasSo6Y5jzOono53dkRmOSDDnV4X6t9rH2E0IjdzIaPJFu3qrwyz8wlmoZOU2IInRQDJN23w8nW9pcEFkcvguOxDv/L5/TIkQAX0qgnM5OO7p06eG2fX7DIlxOLrobY2p+8sSJXve1p8lezr1BtYVBvttwrcNvb791cCHFoeRwd9BpDAfghS0A4lvjHwYqmsaaM+sUqhuIA7McrVT1fZgdFLBDwzRHwlfjIb7wYrJGeYU9TuleWVhpC/4G4IkgzLpySDPhNNftjCAW/VjCJ+8iJg/gPWQHsLGfWo6HCEAQxXsXSdAna38N7/bfZ1efS1QqP7g3/ustOPZU9xBnLSpuKzkpIHMmwU6Z6xAj0Zfv4Ia3d6rPC2bbxg65/xqddRkQ+zPYRegXFjYlT1PYhWnqIjClqwecMECqrsDOaxTtg0oV8BkPKXBKarpLRCkDT/nzpNokzsMn0YntNj/o58wgog==","routes":[{"fromAirport":"AMS","toAirport":"JFK","departureTime":1567516500,"arrivalTime":1567546200,"airline":"DY","flightNumber":7701,"latLngFrom":[52.308056,4.764167],"latLngTo":[40.639722,-73.778889]}],"arrivalTime":1567546200},{"fromAirport":"JFK","toAirport":"SFO","departureTime":1567716900,"price":136,"deepLink":"https://www.kiwi.com/deep?from=JFK&to=SFO&departure=05-09-2019&flightsId=20a10f9c46e000000ae8d153_0&price=123&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzuuu/Fii1udXmE35Wmeos+2ApBaeW16GJTyKaKFnpSwH38+Ke9GrVKh6aCMBGK7wT5obOK15Ch+0IUCtMUE6YwSzDkVtx60eBO2AN/jWHHCHNDbCtgAqEABmmxOH+XZ/aTRLSqjZBAUBNd5frWje1duZ0txn0OLAgJj/kQO+M5qj/q3h3E7nn5pEyMzaGe+VqEL3b4KBaHoG1QrmaYuT7mrm9j4Qn6n5tUuDdJGeXLWrD5ifLEy3BalOs00I9hs86L3HdQBakq+wgKF+gLsnlONs8e/soP6YhEeMPg9gnfGThV67XyDMcBBgAoGXTDrKBYI5bObnioQqOwvijrlAnIDRyKKx2K8x5WRV7IIQgxc1KvlAUyQrWPSY/DfAi/YcFpDVV0Zfe3fcN2A5WeS4U15uEAH4ijX4ZDOgA+4H2dtvcoGBso1fp/rTqXrrCDf/ggOPhp9dpEVMwwdpzeImp+2LHDLlgRJ3DCLPzQsvMamV6qbJMAIs8m07icrQ3Wy8Rvg+tswf10yR+jQwa7lvVDtcDLMgpUZxQWkQZhHr/a3mJotFAcbPi368dmphyBp/TlUhemJ2lJUpKnySJqu7QIOmrj9qXwuUKZRwz5GxSx8F2LCrrcQpFlpkxtVx2/m7MaHuKSUatY3/nLEaSUKS2U6mMFHEBCocNOvKBzh02jAIgi2S6H2CpXzxrMynrRNQvOhU/SIf39oeAUlWYwv4sryfoOiFV//dIDzE0XOgcmm02WiJbFwULz1eadcfhH8bLQc421NvNf9utARf+8TCKjkYIcIGI/Yo0J0pp1Fi6JOsZgyuz4oC+X22CJEc3MxfGc0ZF2/6oEk+f4Wjs+Qtmug==","routes":[{"fromAirport":"JFK","toAirport":"SFO","departureTime":1567716900,"arrivalTime":1567741200,"airline":"AS","flightNumber":657,"latLngFrom":[40.639722,-73.778889],"latLngTo":[37.618889,-122.39167]}],"arrivalTime":1567741200},{"fromAirport":"SFO","toAirport":"LAX","departureTime":1567904400,"price":56,"deepLink":"https://www.kiwi.com/deep?from=SFO&to=LAX&departure=07-09-2019&flightsId=0f9c243e46e20000add1ff22_0&price=51&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzBMcWq4Kintnwy/Rmot5bl3QIK/Ph882AG2pm+xcqTiLmHWrQ/kYccpbiWSctag3uIiyVR6qf1G5mv4PJwM+XN5NEKg9za+ekUavGmkB9fEl4jjC4FHgKJFjWGy81fOUmwAbSE3uctR/LRxclZjok8DBes6gje0JYjKMfZ0tygTW1fCzckxemt2F2J0gyS+GzXb8/YchsOr82zvbZKxdXeHnaxxNZVprscIIyhy93rTsLABcL0aG1q6QFYCLoDjyvobj8zlbtWpSjtTGVLX4Wz+IuvACHRPC07C8ZBYyaZVU8k7XdPr3Y02OQyIDuI4wKlzOOhpwJoZZ4/oUp2HwLkgYL+Qb2vxPLPrKiQuLw6lmCYH65+KHq6CIPi1O5rXNCpdCaLwZhbjCGjFyoisdbLbCg4xTdeE1+k8LS8wGiOZ5ciX9v+FB/nXN5BEmVPv9kPrBQl1z87LqPwinS7tc6I34ipCjBuEgurv8Ck6RFmWTFThISoRV2VBFT9g/bxI8PBCl6WRrP4/knoyDd/o3j0MdiOU+oBjYEmO0BsMSzJ/q+Bt+8rBS1q/KbkAO/T15NB7bqhmGRmo1wa02iXpp4Kf+PrvTN9lsSTsCQX14TjvzwLaiSAD88RTpnM+pXEtdXRQ+pi9DCPaEai1cdqGJGE5AvV9qX9zVAhQSx6XormObK3wl7wkqRlG2iJa9VeaxBV78/6VOWhfwe2q24I1AaMM403oFWGKxwlGJwfLH+hFHoJn41tRVQBp6CTVtlOxEOrq/9RuFkQO34aBsOsmFFqFLA1quQksSWw3ZpXQ1oDQnC6ux1xEH0F3hVUUgrqSH/FdaOKOtESxlKZ9rBasymsQ==","routes":[{"fromAirport":"SFO","toAirport":"LAX","departureTime":1567904400,"arrivalTime":1567910100,"airline":"AS","flightNumber":1936,"latLngFrom":[37.618889,-122.39167],"latLngTo":[33.9425,-118.40806]}],"arrivalTime":1567910100}],"totalPrice":1003},{"userId":"1","origin":"LAX","roundTrip":true,"numAdults":1,"flightClass":"economy","directFlights":false,"destinations":[{"location":"AMS","numDays":3},{"location":"SFO","numDays":2},{"location":"JFK","numDays":2}],"flights":[{"fromAirport":"LAX","toAirport":"AMS","departureTime":1567312080,"price":455,"deepLink":"https://www.kiwi.com/deep?from=LAX&to=AMS&departure=31-08-2019&flightsId=243e04cd46db0000d8db8aaa_0%7C04cd10e846dc0000c5bf1856_0%7C04cd10e846dc0000c5bf1856_1&price=411&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzxDPre9dQXvYLFUVoZxYRDZZSJRtzx1TxwLNx2q9aX0p83brBcD0JgUuIzMA7QM+064NMArhQFwFNm9Nc2ZCWTg2ya99CV44+ULdRB+uW3Ql/O73VfhZ2oKVma+WoNnlsctDCOROox0tzubi6lAIJz2tV1p+K53ycmDnRitjeQLA3TCAqKQJOpWDBiKovNBYUei8dZ7sBFWjnOlw2CMHUF8N4Yw0c0XzhKJ6mQ/lUGvoQY70tHSO16WZCpcU5Kfnt+tZd4BniKZy6ZKE90tBoao5EB3nI9x0joki+vnWotahxoZSBbjjjLpwRz4gYpqIBX4kBuEbhte0FWp5VAwX42aYK3y+NMJcfou2gfKBVhd6Nz8EdX2c42uK8akcrd66ceqdVd/uZOPh/jhvTJfwuMLigH0wYvpaMCwTwFN1dBMHCRscRtTwOg9aNDPnnbcRuv5SS7OL+q3j8Zl8rLgE7NAIvrdUK88MS5Q2ATDtrKSwtwSTWsA1BVwA4bCB2tIEfpLhca2yung+KNyw9c/uJI7nJW8/due18JI4Vxv/IC4j/Eho5ZsDL5CpFZ6i7ht+GUCvigj75hes3aAY79lJecuCQanf2tvOsXlL8zpKOzj83ltmZ1NRtbZ47jCcxIXd/3enORRs/dUUaTc4i8LXqW2/3ueUrSFvy1eBOkJSjVbcrr4NLaUWFFu2xo2aMoGWbBEJm8SKwKBSOsUDbXqClC2oEAg4iyNmynEFyRz3H4jlw/ybsVrSFV7x0VC6Cmp4aBQ1z3Et4YzTZCZ6InDXmDmVU1lohtB1JW/3j7Sby4Ap+EVJTAQ++GPGNmjBXT32tPyozjbkYf7nypJ4eOrg9NA4gcJUXbzjhLiCKxIC5Wz6st+uJ0L74iLDPyaQnd46yHlhzyjECXScovGnYLsZkgVnqlOinzgCYhB1z6eWZSj21E83BQxl9EuKDzrOMgPyEXorzg8cIk4WYDD4P5ZsolQ==","routes":[{"fromAirport":"LAX","toAirport":"FLL","departureTime":1567312080,"arrivalTime":1567330500,"airline":"NK","flightNumber":310,"latLngFrom":[33.9425,-118.40806],"latLngTo":[26.0725,-80.152778]},{"fromAirport":"FLL","toAirport":"CPH","departureTime":1567395900,"arrivalTime":1567428900,"airline":"DY","flightNumber":7042,"latLngFrom":[26.0725,-80.152778],"latLngTo":[55.620278,12.650278]},{"fromAirport":"CPH","toAirport":"AMS","departureTime":1567434900,"arrivalTime":1567440000,"airline":"D8","flightNumber":3540,"latLngFrom":[55.620278,12.650278],"latLngTo":[52.308056,4.764167]}],"arrivalTime":1567440000},{"fromAirport":"AMS","toAirport":"SFO","departureTime":1567487100,"price":370,"deepLink":"https://www.kiwi.com/deep?from=AMS&to=SFO&departure=03-09-2019&flightsId=10e822f546de0000fd467a01_0%7C22f5243e46de000079c81dfd_0%7C243e0f9c46df00002831769f_0&price=335&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzRg+JZGeEzCL3h01MU1EKvRLxLqt1GSrtntn9YDIRUhuHnawYCFik0TpI7L2CzyKd3E70xESGoPyeJfbZZoOBeKGFHialSJCXR9CQ3nAM5wlrgwTAalXt7oN4Jte4k3n/tgA5YrEp2CF1SCh15Yuqd1BmMjbyBYO7gGsUeQ+9egMW/aVOiQQZsS9XUooxwd9nvUvq1FWBx8UC7LPiOOFE0AN1B4JyscYVSERsNiplm535pm4X8wFVhFqc1j2pKaNx4ZpO4u/zfCUKwuZs3V7jjf4rTJEfnyKZupAsLRN8mTJvRjP86w2SJqOxM+/G0DFqQdclsZUr+bhexCMV7z3jP1r+StECVvPjhfNaIHkYMPx8GyUjt3mjdKIqwHIGro+V2/XLTEe+ShMvEGwBIIpM59kXVid/QyNEUQFrDXco1HVT31waiya84vkPfQzvQTDEnPxZcuC9vb65Awia6+N+CnjATmXC32IjyQ0wMXVZqf96yD1kqHx9R2FNgZ/YJqjxBTKFe6MaY30Lqdu3xSuICTw7aIzbWD5Z4f15ZYZJwvmV+T7Rrx/7IGvt57e+W42Jc+Nzib4kcu4tHUFgkz/JSaUSQ89JMi4u5i7c40WXkOp9kD39ok0xV9sjXbgc1wfpI652xOPVP1IW1nSJO0rvvgxVqE7H38J80t5pTTS54O0I7OXuFetGnHcZrbNNqixIKs3TvazhXJsbkYY9iiv7Dz2hdBiP4MWwWh0/sG3bfuN4n1hZH3CYB1mxlxPP7YId0gDLibENPeuOPbOedPLnyj8belBuTcT3IKWyWmXlOzy6Sf3pY/ps/A6Dmcia95uNusERijWPZ/Sbm7aNSFbDeY0hrXVcGVS4EnXVeUz1wpQ2Q8gLqbBJ6k9B3I/fJ5PKgEmCp2ErR/8nNO5rlFB7mPkSItMNQe0kS1RKtsR4YSVoOYTS7k3DAuKJCeivDKjjfSS+nXkkMqSDXeiOJroQhA==","routes":[{"fromAirport":"AMS","toAirport":"LGW","departureTime":1567487100,"arrivalTime":1567491900,"airline":"U2","flightNumber":8868,"latLngFrom":[52.308056,4.764167],"latLngTo":[51.148056,-0.190278]},{"fromAirport":"LGW","toAirport":"LAX","departureTime":1567516200,"arrivalTime":1567557000,"airline":"DI","flightNumber":7095,"latLngFrom":[51.148056,-0.190278],"latLngTo":[33.9425,-118.40806]},{"fromAirport":"LAX","toAirport":"SFO","departureTime":1567603800,"arrivalTime":1567609200,"airline":"AS","flightNumber":1925,"latLngFrom":[33.9425,-118.40806],"latLngTo":[37.618889,-122.39167]}],"arrivalTime":1567609200},{"fromAirport":"SFO","toAirport":"JFK","departureTime":1567723260,"price":181,"deepLink":"https://www.kiwi.com/deep?from=SFO&to=JFK&departure=05-09-2019&flightsId=0f9c20a146e00000e2de8462_0&price=164&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauz2UXJ00c0/iTaVoqQGlQoPY3BJD1PYlbPUNA8DB3xhvDWqT+mZCLaLudAG1FQ3bKucvJ0OkYfla0CshIgbkdq56hiXSgW1baDiDzS8hERrqtQFDIHz1YfWimjTVJ3JMqQYYb8hwZe6/65ptMJBIgu2foeQ2unBuCtgnDlc2kiHWpqV1LePJf8Or38WsaCEKHHy9vsbtKMvMICG11iu75vFIGccEIpjRbixRhXFztPRE8Z/arbyBoVke36QDrmxTI132r9SjjnAvG4GZMV8oZgdfRQ/68bWjqOT83Wml+7lHFt8U4yOAmqV8w+cE+LeNpyIXAH9D4h861oRJ2Ohz6Axyurf+E80SBDkylTPU+EcfVF6QfPQK/HnDtyKJzAuQFZoBd52p/bzIdyMqkUKRyslpopK6YlDBStEeW1IyDw7DsDRwHaHd6HozhiYd+/ptfoLIco0MEKnplfyW9n6yLBR5jhhKIzH4Fx43Knn0SI5YQfEy2NnnBmQ4YupDp0tPz7QBlyvcttL9UBrVY0Kaj66e4gsTG+zrzs9FQCW+r+IyZzsxhclU0Jq8DAApwNTKaaX/0Yi+lxWQvs7NpGqVcavkGuFcPwD2pAH2Cnlz+iP7vL2i8VVuvvv88z3YGb2xB4r17TGEFVtDlaGFjCoiJ+XbjCIc4UYhTm7Of4sHfio7CYOqB97za5AvfQTrouTVHFz1zsC6NiczUsDR9OuipSAUjpbQMXBasQiG1F9so+HGwRzXvs1sFLaDPy38qJogHzbXN5qriZVNRnwFqqStlj92qIWnBihg8C01Vg6hiPy64E8fQxD0s6gsGHa06nPjA/8/sdl8/k2C7WlXSB5yeX2g==","routes":[{"fromAirport":"SFO","toAirport":"JFK","departureTime":1567723260,"arrivalTime":1567743060,"airline":"B6","flightNumber":616,"latLngFrom":[37.618889,-122.39167],"latLngTo":[40.639722,-73.778889]}],"arrivalTime":1567743060},{"fromAirport":"JFK","toAirport":"LAX","departureTime":1567854000,"price":134,"deepLink":"https://www.kiwi.com/deep?from=JFK&to=LAX&departure=07-09-2019&flightsId=20a1243e46e20000cb8d5d6b_0&price=122&passengers=1&affilid=picky&lang=en&currency=USD&booking_token=2ecZSda9kty0xF/hxcwoiFdUDxMYRscYX2JssMhrILNuotgIqMiRnJ8pGLNuJVy+dc2SIxu+AwDet7OLjnaXfv0Eq94z8o7PAxzCTmNX7MUbKAhQhMsRY1sIkapvzauzETrxdP/zCjhq6rPTPDofpia5sk8VjtvTspZzWVKYvjZ8Pow+s3D/Qz0tBAp+xdeCm+JUoB9wQ57U8aJL3SfK/ETJ3cU5LKvXgwhm0+QMxnEsJRgr+hJx699zGYMLSY0iSlr24oo+FghDixzgjUlJHUUUvmej9s5wzCmOmi6Xm4sZWerN7uASjao3AMiARTB/95Omgc3XCdjA8vH+S48GVVfYSnF8oM3a6hqu0eK8Oa3eRdgzL6bOjDC870L40sT0gqM3Xoct2q7aqrt/L9AoIWzhLAYeMaPFbbgnQKycoC2A6Zkw1mco1Y6H2a6OvCX0jHnBP+cneFrrYj4BIRjKf8u/+wr6a0FPDSd7SXrweUJN//2aWJp1NDU0QHWKTB1mRqYQw+M9gsm8plDL2JTPR4KqhIMBbpIFFi7NbLKrRuidi/GCKFfqBfaqsj3dSUevxt79N/Zbv52F/aNf8jUFSdRXjYK7EabGRLWdJ7t6IeulVS/FjFeeMGq3LCukCul+vlQw3uyqj2xZ3YbBVFDUlh+lDOQHCaomjrkP4Oy/EuD6I4Zq5cOYCKl/uLuXFBFN802BSwnDc+nY8BiTp39hzJUKTHH6ymv56/Wcn0WOASVb151Gc1ghBrIwJPxOyEWkRbRlw67XyIWs50R23VPmTFD4to8qmS010YMnW6ls/QswhbziCFXR44WpS8cLYN0iULiH9b2p1dCwL0cAhwTKmPptdxwKW4S8805wHDIU7A3xZCOYhwQ12eNfhuhAVWtGqdkUheZuKfSudi0gco28MUtCB/5vF9TK5PgDv/M9NkpDABHfuTFAvs+c69TIwvZ9z1uuGRg1U6Spa5+rIV6VJw==","routes":[{"fromAirport":"JFK","toAirport":"LAX","departureTime":1567854000,"arrivalTime":1567875600,"airline":"DL","flightNumber":1529,"latLngFrom":[40.639722,-73.778889],"latLngTo":[33.9425,-118.40806]}],"arrivalTime":1567875600}],"totalPrice":1140}]',
);

export const mockFormInput = JSON.parse(
    `{"numAdults":1,"destinationNumDays-1":2,"departureDate":"2019-08-31T23:41:55.535Z","endDate":"2019-09-07T23:41:55.535Z","flightClass":"economy","directFlights":false,"origin":"LAX","destination-1":"JFK","destinationNumDays-2":2,"destination-2":"SFO","destinationNumDays-3":3,"destination-3":"AMS","tripType":"round-trip"}`,
);
