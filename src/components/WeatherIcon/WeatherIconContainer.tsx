import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const WeatherIconContainer = styled(Box)`
  width: 6em;
  height: 5em;
  position: relative;

  & {
    .icon {
      font-size: 0.8em; /* control icon size here */
    }

    .cloud {
      position: absolute;
      z-index: 1;
      top: 50%;
      left: 50%;
      width: 3.6875em;
      height: 3.6875em;
      margin: -1.84375em;
      background: currentColor;
      border-radius: 50%;
      box-shadow: -2.1875em 0.6875em 0 -0.6875em, 2.0625em 0.9375em 0 -0.9375em,
        0 0 0 0.375em ${(props) => props.stroke},
        -2.1875em 0.6875em 0 -0.3125em ${(props) => props.stroke},
        2.0625em 0.9375em 0 -0.5625em ${(props) => props.stroke};
    }
    .cloud:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: -0.5em;
      display: block;
      width: 4.5625em;
      height: 1em;
      background: currentColor;
      box-shadow: 0 0.4375em 0 -0.0625em ${(props) => props.stroke};
    }
    .cloud:nth-of-type(2) {
      z-index: 0;
      background: ${(props) => props.stroke};
      box-shadow: -2.1875em 0.6875em 0 -0.6875em ${(props) => props.stroke},
        2.0625em 0.9375em 0 -0.9375em ${(props) => props.stroke},
        0 0 0 0.375em ${(props) => props.stroke},
        -2.1875em 0.6875em 0 -0.3125em ${(props) => props.stroke},
        2.0625em 0.9375em 0 -0.5625em ${(props) => props.stroke};
      opacity: 0.3;
      transform: scale(0.5) translate(6em, -3em);
      animation: cloud 4s linear infinite;
    }
    .cloud:nth-of-type(2):after {
      background: ${(props) => props.stroke};
    }

    .sun {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2.5em;
      height: 2.5em;
      margin: -1.25em;
      background: currentColor;
      border-radius: 50%;
      box-shadow: 0 0 0 0.375em ${(props) => props.stroke};
      animation: spin 12s infinite linear;
    }
    .rays {
      position: absolute;
      top: -2em;
      left: 50%;
      display: block;
      width: 0.375em;
      height: 1.125em;
      margin-left: -0.1875em;
      background: ${(props) => props.stroke};
      border-radius: 0.25em;
      box-shadow: 0 5.375em ${(props) => props.stroke};
    }
    .rays:before,
    .rays:after {
      content: "";
      position: absolute;
      top: 0em;
      left: 0em;
      display: block;
      width: 0.375em;
      height: 1.125em;
      transform: rotate(60deg);
      transform-origin: 50% 3.25em;
      background: ${(props) => props.stroke};
      border-radius: 0.25em;
      box-shadow: 0 5.375em ${(props) => props.stroke};
    }
    .rays:before {
      transform: rotate(120deg);
    }

    .rain,
    .snow {
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 50%;
      width: 3.75em;
      height: 3.75em;
      margin: 0.375em 0 0 -2em;
      background: currentColor;
    }

    .rain:after {
      content: "";
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 50%;
      width: 1.125em;
      height: 1.125em;
      margin: -1em 0 0 -0.25em;
      background: #0cf;
      border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
      box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
        -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
        -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
      transform: rotate(-28deg);
      animation: rain 3s linear infinite;
    }

    .flake:before,
    .flake:after {
      content: "\\2744";
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -1.025em 0 0 -1.0125em;
      color: ${(props) => props.stroke};
      list-height: 1em;
      opacity: 0.4;
      animation: spin 8s linear infinite reverse;
    }
    .flake:after {
      margin: 0.125em 0 0 -1em;
      font-size: 1.5em;
      opacity: 0.6;
      animation: spin 14s linear infinite;
    }
    .flake:nth-of-type(2):before {
      margin: -0.5em 0 0 0.25em;
      font-size: 1.25em;
      opacity: 0.4;
      animation: spin 10s linear infinite;
    }
    .flake:nth-of-type(2):after {
      margin: 0.375em 0 0 0.125em;
      font-size: 2em;
      opacity: 0.6;
      animation: spin 16s linear infinite reverse;
    }

    /* Animations */

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes cloud {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0.3;
      }
      100% {
        opacity: 0;
        transform: scale(0.5) translate(-200%, -3em);
      }
    }

    @keyframes rain {
      0% {
        background: #0cf;
        box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
          -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
          -1.375em -0.125em 0 #0cf;
      }
      25% {
        box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
          -0.875em 1.125em 0 -0.125em #0cf,
          -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
      }
      50% {
        background: rgba(255, 255, 255, 0.3);
        box-shadow: 0.625em 0.875em 0 -0.125em #0cf,
          -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
          -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
      }
      100% {
        box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
          -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
          -1.375em -0.125em 0 #0cf;
      }
    }
  }
`;

export default WeatherIconContainer;
