# Axios API 클라이언트

추상화된 axios 인스턴스를 제공하여 일관된 API 요청 처리를 할 수 있습니다.

## 주요 기능

- ✅ 자동 토큰 관리 (localStorage/sessionStorage)
- ✅ 요청/응답 인터셉터
- ✅ 자동 에러 핸들링
- ✅ 타입 안전성 (TypeScript)
- ✅ 파일 업로드 지원
- ✅ 커스텀 설정 가능
- ✅ **새로운 request 메서드로 유연한 API 호출**

## 기본 사용법

### 1. 환경 변수 설정

`.env.local` 파일에 API 기본 URL을 설정하세요:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

### 2. 새로운 request 메서드 사용법 (권장)

```typescript
import { api } from '@/component/shared/api/axiosInstance';

// GET 요청
const users = await api.request<User[]>({
  url: '/users',
  method: 'GET'
});

// POST 요청
const newUser = await api.request<User>({
  url: '/users',
  method: 'POST',
  data: {
    name: '홍길동',
    email: 'hong@example.com'
  }
});

// PUT 요청
const updatedUser = await api.request<User>({
  url: '/users/1',
  method: 'PUT',
  data: {
    name: '김철수'
  }
});

// DELETE 요청
await api.request<void>({
  url: '/users/1',
  method: 'DELETE'
});

// 커스텀 헤더와 함께 요청
const response = await api.request<User[]>({
  url: '/users',
  method: 'GET',
  headers: {
    'X-Custom-Header': 'custom-value'
  }
});

// 쿼리 파라미터와 함께 요청
const searchResult = await api.request<User[]>({
  url: '/users/search',
  method: 'GET',
  params: {
    q: '검색어',
    limit: 10
  }
});
```

### 3. 기존 방식 (개별 메서드 사용)

```typescript
import { api } from '@/component/shared/api/axiosInstance';

// GET 요청
const users = await api.get<User[]>('/users');

// POST 요청
const newUser = await api.post<User>('/users', {
  name: '홍길동',
  email: 'hong@example.com'
});

// PUT 요청
const updatedUser = await api.put<User>('/users/1', {
  name: '김철수'
});

// DELETE 요청
await api.delete('/users/1');

// 파일 업로드
const file = document.querySelector('input[type="file"]').files[0];
const result = await api.upload<{ url: string }>('/upload', file);
```

### 4. 인증 토큰 관리

```typescript
import { apiClient } from '@/component/shared/api/axiosInstance';

// 로그인 후 토큰 설정 (영구 저장)
apiClient.setAuthToken('your-jwt-token', true);

// 세션 토큰 설정 (브라우저 종료 시 삭제)
apiClient.setAuthToken('your-jwt-token', false);

// 토큰 제거
apiClient.removeAuthToken();
```

### 5. 커스텀 설정

```typescript
import { apiClient } from '@/component/shared/api/axiosInstance';

// 기본 URL 변경
apiClient.setBaseURL('https://api.example.com');

// 커스텀 헤더와 함께 요청
const response = await apiClient.request({
  url: '/users',
  method: 'GET',
  headers: {
    'X-Custom-Header': 'value'
  }
});
```

## 응답 타입

모든 API 응답은 다음과 같은 형태를 가집니다:

```typescript
interface ApiResponse<T> {
  data: T;           // 실제 데이터
  status: number;    // HTTP 상태 코드
  message?: string;  // 메시지 (선택사항)
  success: boolean;  // 성공 여부
}
```

## RequestConfig 타입

새로운 request 메서드에서 사용하는 설정 타입:

```typescript
interface RequestConfig {
  url: string;                                    // API 엔드포인트
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';  // HTTP 메서드
  data?: any;                                     // 요청 데이터 (POST, PUT, PATCH)
  params?: any;                                   // 쿼리 파라미터
  headers?: any;                                  // 커스텀 헤더
  timeout?: number;                               // 타임아웃
  // ... 기타 axios 설정들
}
```

## 에러 처리

에러는 자동으로 처리되며, 다음과 같은 상태 코드별 처리가 포함됩니다:

- `401`: 인증 실패 - 토큰 제거 및 로그인 페이지 리다이렉트
- `403`: 권한 없음
- `404`: 리소스를 찾을 수 없음
- `500`: 서버 오류

```typescript
try {
  const response = await api.request<User[]>('/users', 'GET');
  console.log('성공:', response.data);
} catch (error) {
  console.error('에러:', error.message);
  // 에러는 자동으로 처리됩니다
}
```

## 실제 사용 예시

더 자세한 사용 예시는 `example.ts` 파일을 참조하세요.

### 사용자 API 예시 (새로운 방식)

```typescript
import { userApiWithRequest } from '@/component/shared/api/example';

// 사용자 목록 조회
const users = await userApiWithRequest.getUsers();

// 사용자 생성
const newUser = await userApiWithRequest.createUser({
  name: '홍길동',
  email: 'hong@example.com',
  password: 'password123'
});

// 커스텀 헤더와 함께 요청
const usersWithHeaders = await userApiWithRequest.getUsersWithHeaders();

// 검색 기능
const searchResult = await userApiWithRequest.searchUsers('검색어');
```

### 동적 API 호출 예시

```typescript
import { dynamicApi } from '@/component/shared/api/example';

// 메서드를 동적으로 결정
const result = await dynamicApi.callApi<User[]>(
  '/users',
  'GET'
);

// 조건부 API 호출
const response = await dynamicApi.conditionalApiCall<User>(
  true,  // true면 POST, false면 PUT
  '/users',
  userData
);
```

## 인터셉터 기능

### 요청 인터셉터
- 자동으로 Authorization 헤더에 토큰 추가
- 요청 로깅

### 응답 인터셉터
- 응답 로깅
- 자동 에러 처리
- 상태 코드별 처리

## 주의사항

1. **환경 변수**: `NEXT_PUBLIC_` 접두사가 붙은 환경 변수만 클라이언트에서 접근 가능합니다.
2. **토큰 저장**: 민감한 정보는 적절한 보안 조치를 취하세요.
3. **에러 처리**: 에러는 자동으로 처리되지만, 필요에 따라 추가 처리를 할 수 있습니다.
4. **메서드 타입**: request 메서드의 method 파라미터는 정확한 HTTP 메서드 문자열을 사용해야 합니다. 