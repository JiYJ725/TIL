

## π₯ Projects!

<p align="middle">
  <img width="400" src="./src/images/moonbucks-main.png">
</p>

<p align="middle">
  <a href="https://blackcoffee-study.github.io/moonbucks-menu/">π₯οΈ λ°λͺ¨ λ§ν¬</a>
</p>

<br/>

## π― step1 μκ΅¬μ¬ν­ - λ μ‘°μκ³Ό μ΄λ²€νΈ νΈλ€λ§μΌλ‘ λ©λ΄ κ΄λ¦¬νκΈ°

- [ ] μμ€νλ μ λ©λ΄μ μλ‘μ΄ λ©λ΄λ₯Ό νμΈ λ²νΌ λλ μν°ν€ μλ ₯μΌλ‘ μΆκ°νλ€.
  - [ ] λ©λ΄κ° μΆκ°λκ³  λλ©΄, inputμ λΉ κ°μΌλ‘ μ΄κΈ°ννλ€.
  - [ ] μ¬μ©μ μλ ₯κ°μ΄ λΉ κ°μ΄λΌλ©΄ μΆκ°λμ§ μλλ€.
- [ ] λ©λ΄μ μμ  λ²νΌμ λλ¬ λ©λ΄ μ΄λ¦ μμ ν  μ μλ€.
  - [ ] λ©λ΄ μμ μ λΈλΌμ°μ μμ μ κ³΅νλ `prompt` μΈν°νμ΄μ€λ₯Ό νμ©νλ€.
- [ ] λ©λ΄ μ­μ  λ²νΌμ μ΄μ©νμ¬ λ©λ΄ μ­μ ν  μ μλ€.
  - [ ] λ©λ΄ μ­μ μ λΈλΌμ°μ μμ μ κ³΅νλ `confirm` μΈν°νμ΄μ€λ₯Ό νμ©νλ€.
- [ ] μ΄ λ©λ΄ κ°―μλ₯Ό countνμ¬ μλ¨μ λ³΄μ¬μ€λ€.
- μΆκ°λλ λ©λ΄μ μλ λ§ν¬μμ `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>` μμ μ½μν΄μΌ νλ€.

```js
<li class="menu-list-item d-flex items-center py-2">
  <span class="w-100 pl-2 menu-name">${name}</span>
  <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
  >
    μμ 
  </button>
  <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
  >
    μ­μ 
  </button>
</li>
```

## π― step2 μκ΅¬μ¬ν­ - μν κ΄λ¦¬λ‘ λ©λ΄ κ΄λ¦¬νκΈ°

- [ ] [localStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)μ λ°μ΄ν°λ₯Ό μ μ₯νμ¬ μλ‘κ³ μΉ¨ν΄λ λ°μ΄ν°κ° λ¨μμκ² νλ€.
- [ ] μμ€νλ μ, νλΌνΈμΉλΈ, λΈλ λλ, ν°λ°λ, λμ νΈ κ°κ°μ μ’λ₯λ³λ‘ λ©λ΄νμ κ΄λ¦¬ν  μ μκ² λ§λ λ€.
  - [ ] νμ΄μ§μ μ΅μ΄λ‘ μ κ·Όν  λλ μμ€νλ μ λ©λ΄κ° λ¨Όμ  λ³΄μ΄κ² νλ€.
- [ ] νμ  μνμΈ κ²½μ°λ₯Ό λ³΄μ¬μ€ μ μκ², νμ  λ²νΌμ μΆκ°νκ³  `sold-out` classλ₯Ό μΆκ°νμ¬ μνλ₯Ό λ³κ²½νλ€.
- νμ  μν λ©λ΄μ λ§ν¬μ

```js
<li class="menu-list-item d-flex items-center py-2">
  <span class="w-100 pl-2 menu-name sold-out">${name}</span>
  <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button"
  >
    νμ 
  </button>
  <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
  >
    μμ 
  </button>
  <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
  >
    μ­μ 
  </button>
</li>
```

## π― step3 μκ΅¬μ¬ν­ - μλ²μμ ν΅μ μ ν΅ν΄ λ©λ΄ κ΄λ¦¬νκΈ°

- [ ] [λ§ν¬](https://github.com/blackcoffee-study/moonbucks-menu-server)μ μλ μΉ μλ² μ μ₯μλ₯Ό cloneνμ¬ λ‘μ»¬μμ μΉ μλ²λ₯Ό μ€νμν¨λ€.
- [ ] μΉ μλ²λ₯Ό λμμ μ€μ  μλ²μ λ°μ΄ν°μ λ³κ²½μ μ μ₯νλ ννλ‘ λ¦¬ν©ν°λ§νλ€.
  - [ ] localStorageμ μ μ₯νλ λ‘μ§μ μ§μ΄λ€.
  - [ ] fetch λΉλκΈ° apiλ₯Ό μ¬μ©νλ λΆλΆμ async awaitμ μ¬μ©νμ¬ κ΅¬ννλ€.
  - [ ] API ν΅μ μ΄ μ€ν¨νλ κ²½μ°μ λν΄ μ¬μ©μκ° μ μ μκ² [alert](https://developer.mozilla.org/ko/docs/Web/API/Window/alert)μΌλ‘ μμΈμ²λ¦¬λ₯Ό μ§ννλ€.
- [ ] μ€λ³΅λλ λ©λ΄λ μΆκ°ν  μ μλ€.

## π API

### baseUrl

`http://localhost:3000`

### λ©λ΄ μμ±νκΈ°

| method | uri                          |
| ------ | ---------------------------- |
| POST   | /api/category/:category/menu |

```javascript
{
 requestBody: {
   "name": "string"
 },
 response: {
   "id": "string",
   "name": "string",
   "isSoldOut": Boolean
  }
}
```

### μΉ΄νκ³ λ¦¬λ³ λ©λ΄λ¦¬μ€νΈ λΆλ¬μ€κΈ°

| method | uri                          |
| ------ | ---------------------------- |
| GET    | /api/category/:category/menu |

```javascript
{
  response: [
    {
      id: "string",
      name: "string",
      isSoldOut: Boolean,
    },
  ];
}
```

### λ©λ΄ μ΄λ¦ μμ νκΈ°

| method | uri                                  |
| ------ | ------------------------------------ |
| PUT    | /api/category/:category/menu/:menuId |

```javascript
{
 requestBody: {
   "name": "string"
 },
 response: {
   "id": "string",
   "name": "string",
   "isSoldOut": Boolean
  }
}
```

### λ©λ΄ νμ  μ²λ¦¬νκΈ°

| method | uri                                          |
| ------ | -------------------------------------------- |
| PUT    | /api/category/:category/menu/:menuId/soldout |

```javascript
{
 response: {
   "id": "string",
   "name": "string",
   "isSoldOut": Boolean
  }
}
```

### λ©λ΄ μ­μ νκΈ°

| method | uri                                  |
| ------ | ------------------------------------ |
| DELETE | /api/category/:category/menu/:menuId |

```javascript
μλ΅ λ°μ΄ν° μμ
```

<br/>

## βοΈ Before Started

#### <img alt="Tip" src="https://img.shields.io/static/v1.svg?label=&message=Tip&style=flat-square&color=673ab8"> λ‘μ»¬μμ μλ² λμμ μμ½κ² static resources λ³κ²½ λ° νμΈνλ λ°©λ²

λ‘μ»¬μμ μΉμλ²λ₯Ό λμ html, css, js λ±μ μ€μκ°μΌλ‘ μμ½κ² νμ€νΈν΄ λ³Ό μ μμ΅λλ€. μ΄λ₯Ό μν΄μλ μ°μ  npmμ΄ μ€μΉλμ΄ μμ΄μΌ ν©λλ€. κ΅¬κΈμ `npm install` μ΄λ ν€μλλ‘ κ°μμ μ΄μμ²΄μ μ λ§κ²λ npmμ μ€μΉν΄μ£ΌμΈμ. μ΄ν μλμ λͺλ Ήμ΄λ₯Ό ν΅ν΄ μ€μκ°μΌλ‘ μΉνμ΄μ§λ₯Ό νμ€νΈν΄λ³Ό μ μμ΅λλ€.

```
npm install -g live-server
```

μ€νμ μλμ μ»€λ§¨λλ‘ ν  μ μμ΅λλ€.

```
live-server ν΄λλͺ
```

<br/>

## π» Code Review

μλ λ§ν¬λ€μ μλ λ¦¬λ·° κ°μ΄λλ₯Ό λ³΄κ³ , μ’μ μ½λ λ¦¬λ·° λ¬Ένλ₯Ό λ§λ€μ΄ λκ°λ €κ³  ν©λλ€.

- [μ½λλ¦¬λ·° κ°μ΄λ1](https://edykim.com/ko/post/code-review-guide/)
- [μ½λλ¦¬λ·° κ°μ΄λ2](https://wiki.lucashan.space/code-review/01.intro/)

<br/>

## ππΌ Contributing

λ§μ½ λ―Έμ μν μ€μ κ°μ μ¬ν­μ΄ νμνλ€λ©΄, μΈμ λ  μμ λ‘­κ² PRμ λ³΄λ΄μ£ΌμΈμ.

<br/>

## π Bug Report

λ²κ·Έλ₯Ό λ°κ²¬νλ€λ©΄, [Issues](https://github.com/blackcoffee-study/moonbucks-menu/issues)μ λ±λ‘ν΄μ£ΌμΈμ.

<br/>

## π License

This project is [MIT](https://github.com/blackcoffee-study/moonbucks-menu/blob/main/LICENSE) licensed.