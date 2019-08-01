import React from 'react'

export const borderColor = '#ff7a59'
export const bgColor = '#bf5c43'

export default ({ inverse, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 512 512'
    {...rest}
  >
    <path
      fill={bgColor}
      d='M266.197 216.109c-22.551 21.293-36.655 51.48-36.655 84.991 0 26.326 8.714 50.582 23.359 70.08l-44.473 44.74c-3.953-1.438-8.176-2.245-12.579-2.245-9.702 0-18.776 3.774-25.605 10.602-6.828 6.827-10.602 15.989-10.602 25.696 0 9.701 3.773 18.775 10.602 25.605 6.829 6.826 15.993 10.42 25.605 10.42 9.703 0 18.777-3.505 25.695-10.42a36.103 36.103 0 0 0 10.602-25.605c0-3.774-.538-7.369-1.707-10.873l44.923-45.102c19.765 15.183 44.381 24.169 71.244 24.169 64.599 0 116.797-52.38 116.797-116.977 0-58.578-42.854-107.093-99.007-115.628v-55.343c15.723-6.65 25.335-21.384 25.335-38.545 0-23.449-18.777-43.034-42.227-43.034-23.448 0-41.956 19.585-41.956 43.034 0 17.161 9.613 31.895 25.335 38.545v54.983c-13.655 1.887-26.593 6.019-38.362 12.219-24.796-18.778-105.565-76.997-151.746-112.126 1.078-3.953 1.798-8.085 1.798-12.397C142.573 47.023 121.46 26 95.495 26 69.62 26 48.597 47.023 48.597 72.898c0 25.965 21.023 46.988 46.898 46.988 8.805 0 16.98-2.606 24.078-6.828l146.624 103.051zm80.409 146.986c-34.229 0-61.991-27.763-61.991-61.994 0-34.229 27.762-61.99 61.991-61.99 34.23 0 61.992 27.761 61.992 61.99.001 34.231-27.761 61.994-61.992 61.994z'
    />
    <path
      fill={borderColor}
      d='M195.85 495.999c-12.46 0-24.064-4.74-32.675-13.348-8.728-8.729-13.532-20.334-13.532-32.678 0-12.406 4.806-24.044 13.531-32.768 8.728-8.726 20.332-13.53 32.676-13.53 3.236 0 6.459.342 9.638 1.02l34.43-34.637c-13.357-20.529-20.375-44.193-20.375-68.958 0-31.189 11.052-60.422 31.354-83.522l-132.101-92.843c-7.444 3.385-15.388 5.152-23.3 5.152-31.374 0-56.898-25.565-56.898-56.988 0-31.374 25.524-56.898 56.898-56.898 31.473 0 57.078 25.524 57.078 56.898 0 2.709-.223 5.452-.677 8.28 27.012 20.422 64.196 47.644 94.433 69.779 19.323 14.146 36.39 26.64 47.284 34.776 8.647-3.993 17.773-6.988 27.271-8.951V136.38c-15.784-9.198-25.335-25.779-25.335-44.704 0-29.243 23.308-53.034 51.956-53.034 28.798 0 52.227 23.791 52.227 53.034 0 18.925-9.551 35.506-25.335 44.704v40.891c26.354 5.889 50.297 20.172 68.126 40.802 19.914 23.042 30.881 52.561 30.881 83.119 0 70.016-56.881 126.977-126.797 126.977-25.28 0-49.354-7.266-70.15-21.097l-34.959 35.099c.436 2.519.65 5.106.65 7.804 0 12.345-4.805 23.95-13.53 32.676-8.615 8.608-20.251 13.348-32.769 13.348zm0-72.323c-7.003 0-13.585 2.726-18.535 7.674-4.947 4.946-7.672 11.561-7.672 18.624 0 7.003 2.725 13.586 7.674 18.535 4.831 4.829 11.414 7.49 18.533 7.49 7.281 0 13.722-2.591 18.625-7.492 4.946-4.947 7.671-11.529 7.671-18.533 0-2.78-.39-5.302-1.193-7.708a10 10 0 0 1 2.401-10.222l44.923-45.102a10 10 0 0 1 13.177-.874c18.82 14.458 41.35 22.1 65.152 22.1 58.888 0 106.797-47.989 106.797-106.977 0-53.299-38.064-97.77-90.51-105.742a10 10 0 0 1-8.497-9.886V130.22a10 10 0 0 1 6.104-9.21c12.041-5.093 19.23-16.06 19.23-29.335 0-18.215-14.457-33.034-32.227-33.034-17.621 0-31.956 14.819-31.956 33.034 0 13.275 7.189 24.241 19.23 29.335a10 10 0 0 1 6.104 9.21v54.983c0 4.994-3.685 9.222-8.632 9.906-12.488 1.726-24.288 5.48-35.069 11.16a9.996 9.996 0 0 1-10.698-.875c-10.044-7.606-29.473-21.829-51.969-38.298-32.242-23.603-72.367-52.978-99.794-73.841a10 10 0 0 1-3.593-10.59c.973-3.566 1.445-6.761 1.445-9.766 0-20.346-16.633-36.898-37.078-36.898-20.346 0-36.898 16.553-36.898 36.898 0 20.396 16.553 36.988 36.898 36.988 6.536 0 12.917-1.824 18.966-5.423a10 10 0 0 1 10.862.413l146.624 103.05a10 10 0 0 1 1.116 15.453c-21.616 20.41-33.521 48.012-33.521 77.72 0 23.318 7.384 45.475 21.355 64.074a10 10 0 0 1-.904 13.056l-44.472 44.74a9.996 9.996 0 0 1-10.51 2.348c-2.996-1.089-6.078-1.642-9.159-1.642zm150.756-50.581c-39.696 0-71.991-32.297-71.991-71.994 0-39.695 32.295-71.99 71.991-71.99s71.992 32.295 71.992 71.99c.001 39.697-32.295 71.994-71.992 71.994zm0-123.985c-28.668 0-51.991 23.322-51.991 51.99 0 28.67 23.323 51.994 51.991 51.994 28.669 0 51.992-23.324 51.992-51.994.001-28.667-23.323-51.99-51.992-51.99z'
    />
  </svg>
)