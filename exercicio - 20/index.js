import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

const title = new Component ('h1', 'body', { textContent: 'Olá Mundo!'})
console.log (title)
title.render()

//trocando o tamanho da fonte
title.tag = 'h3'
title.build().render() //Ele iria criar um novo elemento com o tamanho atual sem excluir o anterior

const form = new Form ('body')

const label = new Label ('Nome: ', form, {htmlFor: 'nameInput'})
const input = new Input (form, {id: 'nameInput', name: 'name'})

form.render()
label.render()

form.addChildren(input)

form.addChildren(
    new Component ('br'),
    new Component ('br'),
    new Label ('Data de Nascimento: ', form, {htmlForm:'birthdayInput' }),
    new Input (form, { id: 'birthdayInput', name: 'birthday', type: 'date' })
)
