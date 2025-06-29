# LogDialog 컴포넌트

shadcn/ui Dialog를 기반으로 한 로그 팝업 컴포넌트입니다. 다양한 타입의 로그 메시지를 표시하고, 커스텀 콘텐츠를 주입할 수 있습니다.

## 기능

- 4가지 로그 타입 지원 (success, error, warning, info)
- 각 타입별 아이콘과 색상 자동 적용
- 커스텀 콘텐츠 주입 가능
- 헤더와 푸터 표시/숨김 옵션
- 반응형 디자인

## 기본 사용법

```tsx
import { LogDialog } from "@/component/shared/ui/LogDialog";

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LogDialog
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title='성공!'
      message='작업이 완료되었습니다.'
      type='success'
      confirmText='확인'
      onConfirm={() => console.log("확인됨")}
    />
  );
}
```

## 커스텀 콘텐츠 사용법

```tsx
<LogDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title='커스텀 폼'
  type='info'
  showFooter={false}
>
  <div className='space-y-4'>
    <input type='text' placeholder='이름' />
    <input type='email' placeholder='이메일' />
    <Button onClick={handleSubmit}>제출</Button>
  </div>
</LogDialog>
```

## Props

| Prop               | 타입                                          | 기본값   | 설명                      |
| ------------------ | --------------------------------------------- | -------- | ------------------------- |
| `isOpen`           | `boolean`                                     | -        | 다이얼로그 열림/닫힘 상태 |
| `onClose`          | `() => void`                                  | -        | 다이얼로그 닫기 콜백      |
| `title`            | `string`                                      | -        | 다이얼로그 제목           |
| `message`          | `string`                                      | -        | 다이얼로그 메시지         |
| `type`             | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` | 로그 타입                 |
| `showIcon`         | `boolean`                                     | `true`   | 아이콘 표시 여부          |
| `showCloseButton`  | `boolean`                                     | `true`   | 닫기 버튼 표시 여부       |
| `confirmText`      | `string`                                      | -        | 확인 버튼 텍스트          |
| `cancelText`       | `string`                                      | -        | 취소 버튼 텍스트          |
| `onConfirm`        | `() => void`                                  | -        | 확인 버튼 클릭 콜백       |
| `onCancel`         | `() => void`                                  | -        | 취소 버튼 클릭 콜백       |
| `children`         | `React.ReactNode`                             | -        | 커스텀 콘텐츠             |
| `showHeader`       | `boolean`                                     | `true`   | 헤더 표시 여부            |
| `showFooter`       | `boolean`                                     | `true`   | 푸터 표시 여부            |
| `className`        | `string`                                      | -        | 추가 CSS 클래스           |
| `contentClassName` | `string`                                      | -        | 콘텐츠 영역 CSS 클래스    |
| `headerClassName`  | `string`                                      | -        | 헤더 영역 CSS 클래스      |
| `footerClassName`  | `string`                                      | -        | 푸터 영역 CSS 클래스      |

## 로그 타입별 스타일

- **success**: 초록색 테마, 체크 아이콘
- **error**: 빨간색 테마, X 아이콘
- **warning**: 노란색 테마, 경고 아이콘
- **info**: 파란색 테마, 정보 아이콘

## 예시

### 기본 알림

```tsx
<LogDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title='알림'
  message='작업이 완료되었습니다.'
  type='success'
  confirmText='확인'
/>
```

### 에러 메시지

```tsx
<LogDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title='오류 발생'
  message='작업 중 오류가 발생했습니다.'
  type='error'
  confirmText='다시 시도'
  cancelText='취소'
  onConfirm={retryOperation}
/>
```

### 커스텀 폼

```tsx
<LogDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title='사용자 정보 입력'
  type='info'
  showFooter={false}
>
  <form onSubmit={handleSubmit}>
    <input type='text' placeholder='이름' required />
    <input type='email' placeholder='이메일' required />
    <button type='submit'>저장</button>
  </form>
</LogDialog>
```
