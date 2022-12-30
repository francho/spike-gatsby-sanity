import { MdOutlineChecklist } from 'react-icons/md'
import { BsCardText } from 'react-icons/bs'
import React from 'react'

const boldRenderer = (props) => (
  <strong
    style={{
      fontFamily: 'NewJune,Avenir Next,Helvetica Neue,Arial,sans-serif',
      fontWeight: 'bolder',
    }}
  >
    {props.children}
  </strong>
)

const strongRenderer = (props) => (
  <strong
    style={{
      fontFamily: 'NewJune,Avenir Next,Helvetica Neue,Arial,sans-serif',
      fontWeight: 'bolder',
      color: '#a50050',
    }}
  >
    {props.children}
  </strong>
)

const italicRenderer = (props) => (
  <em
    style={{
      fontFamily: 'NewJune,Avenir Next,Helvetica Neue,Arial,sans-serif',
    }}
  >
    {props.children}
  </em>
)

const emphasisRenderer = (props) => (
  <em
    style={{
      fontFamily: 'NewJune,Avenir Next,Helvetica Neue,Arial,sans-serif',
      fontWeight: 'bolder',
      color: '#a50050',
    }}
  >
    {props.children}
  </em>
)

export default {
  title: 'Block content',
  name: 'simpleBlockContent',
  type: 'array',
  icon: BsCardText,
  of: [
    {
      title: 'Block',
      type: 'block',
      lists: [
        { title: 'bullet list', value: 'bullet' },
        { title: 'number list', value: 'number' },
        {
          title: 'check list',
          value: 'check',
          // render not supported yet for lists. Use css to render it (see https://github.com/sanity-io/sanity/issues/2601)
          icon: MdOutlineChecklist,
        },
      ],
      styles: [
        {
          title: 'H3',
          value: 'h3',
          component: (props) => (
            <h3
              style={{
                fontFamily: 'NewJune,Avenir Next,Helvetica Neue,Arial,sans-serif',
                color: '#51284f',
                fontSize: '1.125rem',
                lineHeight: 1.4,
                marginTop: '0',
                marginBottom: '.75em',
              }}
            >
              {props.children}
            </h3>
          ),
        },
        {
          title: 'H4',
          value: 'h4',
          component: (props) => (
            <h4
              style={{
                fontFamily: 'NewJune,Avenir Next,Helvetica Neue,Arial,sans-serif',
                color: '#51284f',
                fontSize: '1rem',
                lineHeight: 1.333,
                marginTop: '0',
                marginBottom: '.75em',
              }}
            >
              {props.children}
            </h4>
          ),
        },
        {
          title: 'H5',
          value: 'h5',
          component: (props) => (
            <h5
              style={{
                fontFamily: 'NewJune,Avenir Next,Helvetica Neue,Arial,sans-serif',
                color: '#51284f',
                fontSize: '1rem',
                lineHeight: 1.333,
                marginTop: '0',
                marginBottom: '.75em',
              }}
            >
              {props.children}
            </h5>
          ),
        },
        {
          title: <small>Anotación</small>,
          value: 'annotation',
          component: (props) => (
            <small
              style={{
                fontFamily: 'NewJune,Avenir Next,Helvetica Neue,Arial,sans-serif',
                fontSize: '0.625rem',
                lineHeight: 1.5,
              }}
            >
              {props.children}
            </small>
          ),
        },
        {
          title: <p style={{ textAlign: 'center' }}>centrado</p>,
          value: 'center',
          component: (props) => (
            <p
              style={{
                textAlign: 'center',
              }}
            >
              {props.children}
            </p>
          ),
        },
        {
          title: <p style={{ textAlign: 'right' }}>derecha</p>,
          value: 'right',
          component: (props) => (
            <p
              style={{
                textAlign: 'right',
              }}
            >
              {props.children}
            </p>
          ),
        },
      ],
      marks: {
        decorators: [
          {
            title: 'Bold',
            value: 'b',
            component: boldRenderer,
            icon: () => boldRenderer({ children: 'B' }),
          },
          {
            title: 'Strong',
            value: 'strong',
            component: strongRenderer,
            icon: () => strongRenderer({ children: 'B' }),
          },
          {
            title: 'Italic',
            value: 'i',
            component: italicRenderer,
            icon: () => italicRenderer({ children: 'I' }),
          },
          {
            title: 'Cursive',
            value: 'em',
            component: emphasisRenderer,
            icon: () => emphasisRenderer({ children: 'I' }),
          },
        ],
        annotations: [
          {
            title: 'URL',
            type: 'link',
          },
        ],
      },
    },
    {
      type: 'webImage',
    },
  ],
}
