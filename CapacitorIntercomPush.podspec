
  Pod::Spec.new do |s|
    s.name = 'CapacitorIntercomPush'
    s.version = '0.0.1'
    s.summary = 'Register for push with Intercom'
    s.license = 'MIT'
    s.homepage = 'https://github.com/dannyconnolly/capacitor-intercom-push'
    s.author = 'Danny Connolly'
    s.source = { :git => 'https://github.com/dannyconnolly/capacitor-intercom-push', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end