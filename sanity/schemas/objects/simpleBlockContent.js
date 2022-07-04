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
          blockEditor: {
            // render not supported yet for lists. Use css to render it (see https://github.com/sanity-io/sanity/issues/2601)
            icon: MdOutlineChecklist,
          },
        },
      ],
      styles: [
        {
          title: 'H3',
          value: 'h3',
          blockEditor: {
            render: (props) => (
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
        },
        {
          title: 'H4',
          value: 'h4',
          blockEditor: {
            render: (props) => (
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
        },
        {
          title: 'H5',
          value: 'h5',
          blockEditor: {
            render: (props) => (
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
        },
        {
          title: <small>Anotación</small>,
          value: 'annotation',
          blockEditor: {
            render: (props) => (
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
        },
        {
          title: <p style={{ textAlign: 'center' }}>centrado</p>,
          value: 'center',
          blockEditor: {
            render: (props) => (
              <p
                style={{
                  textAlign: 'center',
                }}
              >
                {props.children}
              </p>
            ),
          },
        },
        {
          title: <p style={{ textAlign: 'right' }}>derecha</p>,
          value: 'right',
          blockEditor: {
            render: (props) => (
              <p
                style={{
                  textAlign: 'right',
                }}
              >
                {props.children}
              </p>
            ),
          },
        },
      ],
      marks: {
        decorators: [
          {
            title: 'Bold',
            value: 'b',
            blockEditor: {
              render: boldRenderer,
              icon: () => boldRenderer({ children: 'B' }),
            },
          },
          {
            title: 'Strong',
            value: 'strong',
            blockEditor: {
              render: strongRenderer,
              icon: () => strongRenderer({ children: 'B' }),
            },
          },
          {
            title: 'Italic',
            value: 'i',
            blockEditor: {
              render: italicRenderer,
              icon: () => italicRenderer({ children: 'I' }),
            },
          },
          {
            title: 'Cursive',
            value: 'em',
            blockEditor: {
              render: emphasisRenderer,
              icon: () => emphasisRenderer({ children: 'I' }),
            },
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
